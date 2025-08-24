import Link from 'next/link';
import { notFound } from 'next/navigation';
import { allSlugs, loadDocxPost } from '@/lib/docx';

export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = await allSlugs();
  return slugs.map(slug => ({ slug }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await loadDocxPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="py-8">
      <Link href="/blog" className="underline text-sm text-gray-600">← back</Link>
      <header className="mt-4 mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">{post.title}</h1>
        <div className="text-sm text-gray-500 mt-1">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </time>
          {post.readTime ? <span className="ml-2">{post.readTime}</span> : null}
        </div>
      </header>
      <article className="prose prose-gray max-w-none">
        <div className="blog-content docx-content" dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </div>
  );
}