import fs from 'fs/promises';
import path from 'path';
import * as mammoth from 'mammoth';
import { unstable_cache } from 'next/cache';
import sizeOf from 'image-size';

export type DocxPostMeta = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  filename: string;
};

export type DocxPost = DocxPostMeta & {
  html: string;
  wordCount: number;
};

const POSTS_DIR = path.join(process.cwd(), 'public', 'blog-posts');

function stripTags(html: string) {
  return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

function calcReadTime(words: number, wpm = 200) {
  const min = Math.max(1, Math.round(words / wpm));
  return `${min} min read`;
}

function toSlug(name: string) {
  return name.toLowerCase().replace(/\.docx$/i, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

function overrideDateIfNeeded(filename: string, fallbackIso: string): string {
  // Hard-set date for the first blog post
  // Matches regardless of case
  const lower = filename.toLowerCase();
  if (lower === 'why i left my startup to return to college.docx') {
    return new Date('2025-08-09T00:00:00Z').toISOString();
  }
  return fallbackIso;
}

function extensionFromContentType(ct: string) {
  if (ct.includes('png')) return 'png';
  if (ct.includes('jpeg') || ct.includes('jpg')) return 'jpg';
  if (ct.includes('gif')) return 'gif';
  if (ct.includes('webp')) return 'webp';
  return 'bin';
}

function postProcessHtml(html: string): string {
  return html
    // Ensure proper paragraph spacing
    .replace(/<p><\/p>/g, '<p>&nbsp;</p>')
    // Clean up extra whitespace but preserve intentional line breaks
    .replace(/\s+/g, ' ')
    // Images already have proper dimensions from convertImage, just add spacing, aesthetics, and lazy loading
    .replace(/<img([^>]*?)>/g, '<img$1 loading="lazy" decoding="async" style="margin: 1.5rem 0; border-radius: 0.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">')
    // Wrap orphaned list items in ul tags
    .replace(/(<li[^>]*>.*?<\/li>)(?!\s*<\/[ou]l>)/g, '<ul>$1</ul>')
    // Clean up multiple consecutive breaks
    .replace(/(<br\s*\/?>){3,}/g, '<br><br>')
    .trim();
}

async function listDocxPostsRaw(docxFiles: string[]): Promise<DocxPostMeta[]> {
  const metas: DocxPostMeta[] = [];
  for (const filename of docxFiles) {
    const filePath = path.join(POSTS_DIR, filename);
    const buffer = await fs.readFile(filePath);

    const { value: html } = await mammoth.convertToHtml({ buffer }, {
      styleMap: [
        "p[style-name='Heading 1'] => h1:fresh",
        "p[style-name='Heading 2'] => h2:fresh",
        "p[style-name='Heading 3'] => h3:fresh",
        "p[style-name='Heading 4'] => h4:fresh",
        "p[style-name='Heading 5'] => h5:fresh",
        "p[style-name='Heading 6'] => h6:fresh",
        "p[style-name='Normal'] => p:fresh",
        "p[style-name='Quote'] => blockquote:fresh",
        "p[style-name='Intense Quote'] => blockquote:fresh",
        "p[style-name='List Paragraph'] => li:fresh",
        "r[style-name='Strong'] => strong",
        "r[style-name='Emphasis'] => em",
        "r[style-name='Intense Emphasis'] => strong",
        "p[style-name='Title'] => h1:fresh",
        "p[style-name='Subtitle'] => h2:fresh",
        "p[style-name='Caption'] => figcaption:fresh",
      ],
      // Skip image decoding for metadata listing by returning a minimal placeholder
      convertImage: mammoth.images.imgElement(async () => ({ src: '' })),
    });

    const htmlWithoutImages = html.replace(/<img[^>]*>/g, '');
    const processedHtml = postProcessHtml(htmlWithoutImages);
    const text = stripTags(processedHtml);
    const wordCount = text.split(/\s+/).filter(Boolean).length;
    const readTime = calcReadTime(wordCount);

    const titleMatch = processedHtml.match(/<h1[^>]*>(.*?)<\/h1>/i);
    const title = titleMatch ? stripTags(titleMatch[1]) : path.parse(filename).name;

    const excerptMatch = processedHtml.match(/<p[^>]*>(.*?)<\/p>/i);
    const excerpt = excerptMatch ? stripTags(excerptMatch[1]) : text.slice(0, 160) + (text.length > 160 ? '…' : '');

    const stat = await fs.stat(filePath);
    const date = overrideDateIfNeeded(filename, stat.mtime.toISOString());

    metas.push({
      slug: toSlug(filename),
      title,
      date,
      readTime,
      excerpt,
      filename,
    });
  }
  metas.sort((a, b) => b.date.localeCompare(a.date));
  return metas;
}

export async function listDocxPosts(): Promise<DocxPostMeta[]> {
  try {
    const files = await fs.readdir(POSTS_DIR);
    const docxFiles = files.filter(f => f.toLowerCase().endsWith('.docx') && !f.startsWith('~$'));
    // Build a version key from file names + mtimes/sizes
    const stats = await Promise.all(docxFiles.map(async f => {
      const s = await fs.stat(path.join(POSTS_DIR, f));
      return `${f}:${s.mtimeMs}-${s.size}`;
    }));
    const versionKey = stats.sort().join('|');
    const runner = unstable_cache(
      async () => listDocxPostsRaw(docxFiles),
      ['listDocxPosts', versionKey],
      { revalidate: false, tags: ['posts'] }
    );
    return await runner();
  } catch (error) {
    console.error('Error listing DOCX posts:', error);
    return [];
  }
}

async function loadDocxPostRaw(slug: string): Promise<DocxPost | null> {
  // Try to find the file by slug
  const files = await fs.readdir(POSTS_DIR);
  const docxFiles = files.filter(f => f.toLowerCase().endsWith('.docx') && !f.startsWith('~$'));
  const matchingFile = docxFiles.find(f => toSlug(f) === slug);
  if (!matchingFile) return null;

  const filePath = path.join(POSTS_DIR, matchingFile);
  const buffer = await fs.readFile(filePath);

  // Create output directory for images
  const outDir = path.join(process.cwd(), 'public', 'blog-images', slug);
  await fs.mkdir(outDir, { recursive: true });
  let imageIndex = 0;

  const { value: html } = await mammoth.convertToHtml({ buffer }, {
    styleMap: [
      "p[style-name='Heading 1'] => h1:fresh",
      "p[style-name='Heading 2'] => h2:fresh",
      "p[style-name='Heading 3'] => h3:fresh",
      "p[style-name='Heading 4'] => h4:fresh",
      "p[style-name='Heading 5'] => h5:fresh",
      "p[style-name='Heading 6'] => h6:fresh",
      "p[style-name='Normal'] => p:fresh",
      "p[style-name='Quote'] => blockquote:fresh",
      "p[style-name='Intense Quote'] => blockquote:fresh",
      "p[style-name='List Paragraph'] => li:fresh",
      "r[style-name='Strong'] => strong",
      "r[style-name='Emphasis'] => em",
      "r[style-name='Intense Emphasis'] => strong",
      "p[style-name='Title'] => h1:fresh",
      "p[style-name='Subtitle'] => h2:fresh",
      "p[style-name='Caption'] => figcaption:fresh",
      "b => strong",
      "i => em",
      "u => u",
    ],
    convertImage: mammoth.images.imgElement(async image => {
      const contentType = image.contentType || 'image/png';
      const buf: Buffer = await image.read() as Buffer;
      const dims = sizeOf(buf);
      const ext = extensionFromContentType(contentType);
      const filename = `image-${imageIndex++}.${ext}`;
      await fs.writeFile(path.join(outDir, filename), buf);
      return {
        src: `/blog-images/${slug}/${filename}`,
        alt: 'Image from document',
        loading: 'lazy',
        decoding: 'async',
        ...(dims?.width ? { width: String(dims.width) } : {}),
        ...(dims?.height ? { height: String(dims.height) } : {}),
      };
    }),
  });

  const processedHtml = postProcessHtml(html);
  const stat = await fs.stat(filePath);
  const date = overrideDateIfNeeded(matchingFile, stat.mtime.toISOString());
  const text = stripTags(processedHtml);
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  const readTime = calcReadTime(wordCount);
  const titleMatch = processedHtml.match(/<h1[^>]*>(.*?)<\/h1>/i);
  const title = titleMatch ? stripTags(titleMatch[1]) : path.parse(matchingFile).name;
  const excerptMatch = processedHtml.match(/<p[^>]*>(.*?)<\/p>/i);
  const excerpt = excerptMatch ? stripTags(excerptMatch[1]) : text.slice(0, 160) + (text.length > 160 ? '…' : '');

  return {
    slug,
    title,
    date,
    readTime,
    excerpt,
    filename: matchingFile,
    html: processedHtml,
    wordCount,
  };
}

export async function loadDocxPost(slug: string): Promise<DocxPost | null> {
  try {
    // locate file and version key
    const files = await fs.readdir(POSTS_DIR);
    const docxFiles = files.filter(f => f.toLowerCase().endsWith('.docx') && !f.startsWith('~$'));
    const matchingFile = docxFiles.find(f => toSlug(f) === slug);
    if (!matchingFile) return null;
    const stat = await fs.stat(path.join(POSTS_DIR, matchingFile));
    const versionKey = `${matchingFile}:${stat.mtimeMs}-${stat.size}`;
    const runner = unstable_cache(
      async () => loadDocxPostRaw(slug),
      ['loadDocxPost', slug, versionKey],
      { revalidate: false, tags: [`post:${slug}`] }
    );
    return await runner();
  } catch (error) {
    console.error('Error loading DOCX post:', error);
    return null;
  }
}

export async function allSlugs(): Promise<string[]> {
  const files = await fs.readdir(POSTS_DIR);
  return files
    .filter(f => f.toLowerCase().endsWith('.docx') && !f.startsWith('~$'))
    .map(f => toSlug(f));
}
