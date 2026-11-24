import fs from 'fs/promises';
import path from 'path';
import { marked } from 'marked';

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
};

export type Post = PostMeta & {
  html: string;
};

// Posts are markdown files in content/blog. The filename is the slug, and
// each file starts with a frontmatter block:
//
//   ---
//   title: My post
//   date: 2026-01-31
//   ---
const POSTS_DIR = path.join(process.cwd(), 'content', 'blog');

function calcReadTime(text: string, wpm = 200) {
  const words = text.split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / wpm))} min read`;
}

function parseFrontmatter(raw: string): { data: Record<string, string>; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) return { data: {}, body: raw };
  const data: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    data[line.slice(0, idx).trim()] = line.slice(idx + 1).trim().replace(/^(["'])(.*)\1$/, '$2');
  }
  return { data, body: raw.slice(match[0].length) };
}

async function readPost(slug: string): Promise<Post | null> {
  let raw: string;
  try {
    raw = await fs.readFile(path.join(POSTS_DIR, `${slug}.md`), 'utf8');
  } catch {
    return null;
  }
  const { data, body } = parseFrontmatter(raw);
  const html = await marked.parse(body);
  return {
    slug,
    title: data.title || slug,
    date: new Date(data.date || 0).toISOString(),
    readTime: calcReadTime(body),
    html,
  };
}

export async function allSlugs(): Promise<string[]> {
  const files = await fs.readdir(POSTS_DIR);
  return files.filter(f => f.endsWith('.md')).map(f => f.replace(/\.md$/, ''));
}

export async function listPosts(): Promise<PostMeta[]> {
  const posts = await Promise.all((await allSlugs()).map(readPost));
  return posts
    .filter((p): p is Post => p !== null)
    .map(({ slug, title, date, readTime }) => ({ slug, title, date, readTime }))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export async function loadPost(slug: string): Promise<Post | null> {
  // Slugs come from the URL; only allow plain filenames
  if (!/^[a-z0-9-]+$/.test(slug)) return null;
  return readPost(slug);
}
