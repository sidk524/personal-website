import Link from 'next/link';
import { listDocxPosts } from '@/lib/docx';

export const revalidate = 3600;

export default async function Blog() {
  const posts = await listDocxPosts();
  return (
    <div className="py-8">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Blog</h1>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.slug} className="text-gray-800">
            <Link href={`/blog/${post.slug}`} className="underline">
              {post.title}
            </Link>
            <span className="text-gray-500 text-sm ml-2">
              {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}