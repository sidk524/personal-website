import Link from 'next/link';
import { notFound } from 'next/navigation';
import { allSlugs, loadDocxPost } from '@/lib/docx';

// Force dynamic rendering to always fetch fresh content from DOCX files
export const dynamic = 'force-dynamic';
export const revalidate = 0;

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
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Aurora Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Left Edge Dynamic Vibrant Glow */}
        <div className="absolute top-0 left-[-80px] w-[100px] md:left-[-120px] md:w-[300px] h-full">
          {/* Ultra-Vibrant Purple Glow 1 */}
          <div className="absolute top-[0%] left-0 w-full h-[30%] bg-gradient-to-r from-[#7000ff] via-[#7000ff]/80 via-[#7000ff]/40 to-transparent opacity-100 blur-[30px] md:blur-[60px] animate-glow-flow-left brightness-110 md:brightness-170 mix-blend-screen"></div>
          
          {/* Electric Blue Glow 1 */}
          <div className="absolute top-[20%] left-0 w-full h-[25%] bg-gradient-to-r from-[#0066ff] via-[#0066ff]/75 via-[#0066ff]/35 to-transparent opacity-100 blur-[28px] md:blur-[55px] animate-cloud-drift-right-fast brightness-110 md:brightness-140 mix-blend-screen"></div>
          
          {/* Electric Purple Glow 2 */}
          <div className="absolute top-[40%] left-0 w-full h-[20%] bg-gradient-to-r from-[#7000ff] via-[#7000ff]/80 via-[#7000ff]/40 to-transparent opacity-100 blur-[32px] md:blur-[65px] animate-glow-pulse-move brightness-110 md:brightness-170 mix-blend-screen"></div>
          
          {/* Azure Blue Glow 2 */}
          <div className="absolute top-[55%] left-0 w-full h-[25%] bg-gradient-to-r from-[#0066ff] via-[#0066ff]/75 via-[#0066ff]/35 to-transparent opacity-100 blur-[28px] md:blur-[58px] animate-wave-diagonal brightness-110 md:brightness-145 mix-blend-screen"></div>
          
          {/* Royal Purple Glow 3 */}
          <div className="absolute top-[75%] left-0 w-full h-[30%] bg-gradient-to-r from-[#7000ff] via-[#7000ff]/80 via-[#7000ff]/40 to-transparent opacity-100 blur-[30px] md:blur-[62px] animate-cloud-drift-left-fast brightness-110 md:brightness-170 mix-blend-screen"></div>
        </div>
        
        {/* Right Edge Dynamic Vibrant Glow */}
        <div className="absolute top-0 right-[-80px] w-[100px] md:right-[-120px] md:w-[300px] h-full">
          {/* Brilliant Blue Glow 1 */}
          <div className="absolute top-[0%] right-0 w-full h-[30%] bg-gradient-to-l from-[#0066ff] via-[#0066ff]/80 via-[#0066ff]/40 to-transparent opacity-100 blur-[30px] md:blur-[60px] animate-glow-flow-right brightness-110 md:brightness-150 mix-blend-screen"></div>
          
          {/* Vivid Purple Glow 1 */}
          <div className="absolute top-[20%] right-0 w-full h-[25%] bg-gradient-to-l from-[#7000ff] via-[#7000ff]/75 via-[#7000ff]/35 to-transparent opacity-100 blur-[28px] md:blur-[55px] animate-cloud-drift-left-fast brightness-110 md:brightness-170 mix-blend-screen"></div>
          
          {/* Sapphire Blue Glow 2 */}
          <div className="absolute top-[40%] right-0 w-full h-[20%] bg-gradient-to-l from-[#0066ff] via-[#0066ff]/80 via-[#0066ff]/40 to-transparent opacity-100 blur-[32px] md:blur-[65px] animate-glow-pulse-move brightness-110 md:brightness-160 mix-blend-screen"></div>
          
          {/* Deep Purple Glow 2 */}
          <div className="absolute top-[55%] right-0 w-full h-[25%] bg-gradient-to-l from-[#7000ff] via-[#7000ff]/75 via-[#7000ff]/35 to-transparent opacity-100 blur-[28px] md:blur-[58px] animate-wave-vertical brightness-110 md:brightness-170 mix-blend-screen"></div>
          
          {/* Ocean Blue Glow 3 */}
          <div className="absolute top-[75%] right-0 w-full h-[30%] bg-gradient-to-l from-[#0066ff] via-[#0066ff]/80 via-[#0066ff]/40 to-transparent opacity-100 blur-[30px] md:blur-[62px] animate-cloud-drift-right-fast brightness-110 md:brightness-155 mix-blend-screen"></div>
        </div>
      </div>

      {/* Floating Glassomorphic Navbar */}
      <nav className="fixed top-6 left-6 right-6 z-50">
        <div className="bg-white/12 backdrop-blur-xl border border-white/20 rounded-full px-6 md:px-20 py-3 shadow-2xl shadow-black/10 animate-fade-in">
          <div className="flex justify-between items-center">
            {/* Logo/Name */}
            <Link href="/" className="text-gray-900 font-bold text-lg hover:text-[#5b17d1] transition-colors duration-300">
              SK
            </Link>
            
            {/* Nav Links */}
            <div className="flex space-x-6 md:space-x-12">
              <Link href="/blog" className="text-gray-700 hover:text-[#5b17d1] transition-colors duration-300 font-medium">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Blog Post Content */}
      <div className="relative z-10 pt-28 md:pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto animate-slide-up">
          {/* Back to Blog Link */}
          <Link 
            href="/blog" 
            className="inline-flex items-center text-[#5b17d1] hover:text-[#4a12b0] transition-colors duration-300 mb-8"
          >
            <svg className="w-4 h-4 mr-2 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            Back to Blog
          </Link>

          {/* Post Header */}
          <header className="mb-12">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1 items-start sm:items-center text-sm text-gray-500 mb-6">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              <span>{post.readTime}</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              {post.title}
            </h1>
          </header>

          {/* Post Content */}
          <article className="prose prose-base md:prose-lg prose-gray max-w-none">
            <div 
              className="blog-content docx-content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </article>

          {/* Post Footer */}
          <footer className="mt-16 pt-8 border-t border-gray-200">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-[#5b17d1] hover:text-[#4a12b0] transition-colors duration-300"
            >
              <svg className="w-4 h-4 mr-2 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Back to All Posts
            </Link>
          </footer>
        </div>
      </div>
    </div>
  );
}