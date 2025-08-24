import fs from 'fs/promises';
import path from 'path';
// Defer importing heavy 'mammoth' until needed to avoid bundling it into
// static paths generation or other lightweight code paths.
async function getMammoth() {
  return (await import('mammoth')) as typeof import('mammoth');
}
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

// removed unused extensionFromContentType

function postProcessHtml(html: string): string {
  return html
    // Ensure proper paragraph spacing
    .replace(/<p><\/p>/g, '<p>&nbsp;</p>')
    // Clean up extra whitespace but preserve intentional line breaks
    .replace(/\s+/g, ' ')
    // Images: spacing/aesthetics + responsive cap so large images never exceed half viewport width
    .replace(
      /<img([^>]*?)>/g,
      '<img$1 loading="lazy" decoding="async" style="margin: 1.5rem auto; display: block; width: auto; height: auto; max-width: min(100%, 90vw); max-height: 70vh; object-fit: contain; border-radius: 0.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">'
    )
    // Wrap orphaned list items in ul tags
    .replace(/(<li[^>]*>.*?<\/li>)(?!\s*<\/[ou]l>)/g, '<ul>$1</ul>')
    // Clean up multiple consecutive breaks
    .replace(/(<br\s*\/?>){3,}/g, '<br><br>')
    .trim();
}

function isAllowedImageFilename(name: string): boolean {
  if (!/^[A-Za-z0-9_.-]+$/.test(name)) return false;
  return /(\.png|\.jpe?g|\.gif|\.webp|\.svg)$/i.test(name);
}

async function replaceImagePlaceholders(html: string, slug: string): Promise<string> {
  const pattern = /\[([^\]\s]+\.(?:png|jpe?g|gif|webp|svg))\]/gi;
  const matches = Array.from(html.matchAll(pattern));
  if (matches.length === 0) return html;

  let result = html;
  for (const m of matches) {
    const filename = m[1];
    if (!isAllowedImageFilename(filename)) continue;
    const filePath = path.join(process.cwd(), 'public', 'blog-images', slug, filename);
    let width: number | undefined;
    let height: number | undefined;
    try {
      const buf = await fs.readFile(filePath);
      const dims = sizeOf(buf);
      width = dims?.width;
      height = dims?.height;
    } catch {
      // If the image isn't present, skip replacing this placeholder
      continue;
    }

    const style = 'style="margin: 1.5rem auto; display: block; width: auto; height: auto; max-width: min(100%, 90vw); max-height: 70vh; object-fit: contain; border-radius: 0.5rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);"';
    const attrs = [
      `src="/blog-images/${slug}/${filename}"`,
      `alt="${filename}"`,
      'loading="lazy"',
      'decoding="async"',
      style,
      width ? `width="${width}"` : '',
      height ? `height="${height}"` : ''
    ].filter(Boolean).join(' ');

    const imgTag = `<img ${attrs}>`;
    result = result.replace(m[0], imgTag);
  }
  return result;
}

async function listDocxPostsRaw(docxFiles: string[]): Promise<DocxPostMeta[]> {
  const metas: DocxPostMeta[] = [];
  for (const filename of docxFiles) {
    const filePath = path.join(POSTS_DIR, filename);
    const buffer = await fs.readFile(filePath);

    const mammoth = await getMammoth();
    const { value: rawHtml } = await mammoth.convertToHtml({ buffer }, {
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

    const htmlWithoutImages = rawHtml
      .replace(/<img[^>]*>/g, '')
      .replace(/\[[^\]\s]+\.(?:png|jpe?g|gif|webp|svg)\]/gi, '');
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

  // We embed images directly as data URIs to guarantee availability across hosts

  const mammoth = await getMammoth();
  const { value: rawHtml } = await mammoth.convertToHtml({ buffer }, {
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
      const base64 = buf.toString('base64');
      return {
        src: `data:${contentType};base64,${base64}`,
        alt: 'Image from document',
        loading: 'lazy',
        decoding: 'async',
        ...(dims?.width ? { width: String(dims.width) } : {}),
        ...(dims?.height ? { height: String(dims.height) } : {}),
      };
    }),
  });

  // Replace placeholders like [image-1.png] with <img> pointing to /public/blog-images/{slug}/image-1.png
  const replacedHtml = await replaceImagePlaceholders(rawHtml, slug);
  const processedHtml = postProcessHtml(replacedHtml);
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
    const cached = await runner();
    if (!cached) return null;

    // Ensure referenced image files exist; if any missing, regenerate fresh
    const imagesOk = await ensurePostImagesExist(slug, cached.html);
    if (imagesOk) return cached;

    const fresh = await loadDocxPostRaw(slug);
    return fresh;
  } catch (error) {
    console.error('Error loading DOCX post:', error);
    return null;
  }
}

async function ensurePostImagesExist(slug: string, html: string): Promise<boolean> {
  try {
    const imgSrcs = Array.from(html.matchAll(/<img[^>]*src=["']([^"']+)["'][^>]*>/gi)).map(m => m[1]);
    const relevant = imgSrcs.filter(src => src.startsWith(`/blog-images/${slug}/`));
    if (relevant.length === 0) return true;
    const checks = await Promise.all(relevant.map(async (src) => {
      const rel = src.replace(/^\//, '');
      const p = path.join(process.cwd(), rel);
      try { await fs.access(p); return true; } catch { return false; }
    }));
    return checks.every(Boolean);
  } catch {
    return false;
  }
}

export async function allSlugs(): Promise<string[]> {
  const files = await fs.readdir(POSTS_DIR);
  return files
    .filter(f => f.toLowerCase().endsWith('.docx') && !f.startsWith('~$'))
    .map(f => toSlug(f));
}
