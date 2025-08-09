import fs from 'fs/promises';
import path from 'path';
import * as mammoth from 'mammoth';
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

function postProcessHtml(html: string): string {
  return html
    // Ensure proper paragraph spacing
    .replace(/<p><\/p>/g, '<p>&nbsp;</p>')
    // Clean up extra whitespace but preserve intentional line breaks
    .replace(/\s+/g, ' ')
    // Images already have proper dimensions from convertImage, just add spacing and aesthetics
    .replace(/<img([^>]*?)>/g, '<img$1 style="margin: 1.5rem 0; border-radius: 0.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">')
    // Wrap orphaned list items in ul tags
    .replace(/(<li[^>]*>.*?<\/li>)(?!\s*<\/[ou]l>)/g, '<ul>$1</ul>')
    // Clean up multiple consecutive breaks
    .replace(/(<br\s*\/?>){3,}/g, '<br><br>')
    .trim();
}

export async function listDocxPosts(): Promise<DocxPostMeta[]> {
  try {
    const files = await fs.readdir(POSTS_DIR);
    const docxFiles = files.filter(f => f.toLowerCase().endsWith('.docx') && !f.startsWith('~$'));
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
      convertImage: mammoth.images.imgElement(async image => {
        const contentType = image.contentType || 'image/png';
        
        // Get raw buffer and dimensions
        const buf: Buffer = await image.read() as Buffer;
        const dims = sizeOf(buf);
        const base64 = buf.toString('base64');
        
        // Return data URI + explicit size to preserve original dimensions
        return {
          src: `data:${contentType};base64,${base64}`,
          alt: 'Image from document',
          ...(dims?.width ? { width: dims.width.toString() } : {}),
          ...(dims?.height ? { height: dims.height.toString() } : {}),
        };
      }),
    });

    const processedHtml = postProcessHtml(html);
    const text = stripTags(processedHtml);
      const wordCount = text.split(/\s+/).filter(Boolean).length;
      const readTime = calcReadTime(wordCount);

      const titleMatch = processedHtml.match(/<h1[^>]*>(.*?)<\/h1>/i);
      const title = titleMatch ? stripTags(titleMatch[1]) : path.parse(filename).name;

      const excerptMatch = processedHtml.match(/<p[^>]*>(.*?)<\/p>/i);
      const excerpt = excerptMatch ? stripTags(excerptMatch[1]) : text.slice(0, 160) + (text.length > 160 ? '…' : '');

      const stat = await fs.stat(filePath);
      const date = stat.mtime.toISOString();

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
  } catch (error) {
    console.error('Error listing DOCX posts:', error);
    return [];
  }
}

export async function loadDocxPost(slug: string): Promise<DocxPost | null> {
  try {
    // Try to find the file by slug
    const files = await fs.readdir(POSTS_DIR);
    const docxFiles = files.filter(f => f.toLowerCase().endsWith('.docx') && !f.startsWith('~$'));
    
    const matchingFile = docxFiles.find(f => toSlug(f) === slug);
    if (!matchingFile) return null;

    const filePath = path.join(POSTS_DIR, matchingFile);
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
        "b => strong",
        "i => em",
        "u => u",
      ],
      convertImage: mammoth.images.imgElement(async image => {
        const contentType = image.contentType || 'image/png';
        
        // Get raw buffer and dimensions
        const buf: Buffer = await image.read() as Buffer;
        const dims = sizeOf(buf);
        const base64 = buf.toString('base64');
        
        // Return data URI + explicit size to preserve original dimensions
        return {
          src: `data:${contentType};base64,${base64}`,
          alt: 'Image from document',
          ...(dims?.width ? { width: dims.width.toString() } : {}),
          ...(dims?.height ? { height: dims.height.toString() } : {}),
        };
      }),
    });

    const processedHtml = postProcessHtml(html);
    const metas = await listDocxPosts();
    const meta = metas.find(m => m.slug === slug);
    if (!meta) return null;

    const text = stripTags(processedHtml);
    const wordCount = text.split(/\s+/).filter(Boolean).length;

    return { ...meta, html: processedHtml, wordCount };
  } catch (error) {
    console.error('Error loading DOCX post:', error);
    return null;
  }
}

export async function allSlugs(): Promise<string[]> {
  const posts = await listDocxPosts();
  return posts.map(p => p.slug);
}
