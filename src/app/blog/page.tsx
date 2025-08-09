import Link from 'next/link';
import { listDocxPosts } from '@/lib/docx';

// Incremental Static Regeneration (rebuild at most hourly)
export const revalidate = 3600;

export default async function Blog() {
  const posts = await listDocxPosts();
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Aurora Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0 hidden md:block motion-safe:block motion-reduce:hidden">
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
              <Link href="/blog" className="text-[#5b17d1] font-medium">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Blog Content */}
      <div className="relative z-10 pt-28 md:pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto animate-slide-up">
          {/* Blog Header */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-6xl font-bold text-gray-900 mb-6">
              My Blog
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Thoughts on life and anything I find interesting
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="space-y-8">
            {posts.map((post) => (
              <article 
                key={post.slug}
                className="bg-white/50 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="cursor-pointer">
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 items-start sm:items-center mb-4">
                      <div className="text-sm text-gray-500">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                      <div className="text-sm text-gray-500">
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#5b17d1] transition-colors duration-300">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center text-[#5b17d1] font-medium group-hover:text-[#4a12b0] transition-colors duration-300">
                      Read more
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}