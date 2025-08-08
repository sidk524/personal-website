"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [emailCopied, setEmailCopied] = useState(false);
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Interwoven Color Bands Tapestry */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{ height: '100%', minHeight: '200vh' }}>
        {/* Left Edge Dynamic Vibrant Glow */}
        <div className="absolute top-0 left-[-80px] w-[100px] md:left-[-120px] md:w-[300px]" style={{ height: '100%' }}>
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
          
          {/* Extended aurora effects for scroll */}
          {/* Purple Glow 4 */}
          <div className="absolute top-[100%] left-0 w-full h-[25%] bg-gradient-to-r from-[#7000ff] via-[#7000ff]/70 via-[#7000ff]/30 to-transparent opacity-100 blur-[28px] md:blur-[55px] animate-glow-flow-left brightness-110 md:brightness-160 mix-blend-screen"></div>
          
          {/* Blue Glow 3 */}
          <div className="absolute top-[120%] left-0 w-full h-[20%] bg-gradient-to-r from-[#0066ff] via-[#0066ff]/65 via-[#0066ff]/25 to-transparent opacity-100 blur-[24px] md:blur-[50px] animate-cloud-drift-right-fast brightness-110 md:brightness-135 mix-blend-screen"></div>
          
          {/* Purple Glow 5 */}
          <div className="absolute top-[135%] left-0 w-full h-[30%] bg-gradient-to-r from-[#7000ff] via-[#7000ff]/75 via-[#7000ff]/35 to-transparent opacity-100 blur-[30px] md:blur-[60px] animate-glow-pulse-move brightness-110 md:brightness-165 mix-blend-screen"></div>
          
          {/* Blue Glow 4 */}
          <div className="absolute top-[160%] left-0 w-full h-[25%] bg-gradient-to-r from-[#0066ff] via-[#0066ff]/70 via-[#0066ff]/30 to-transparent opacity-100 blur-[28px] md:blur-[55px] animate-wave-diagonal brightness-110 md:brightness-140 mix-blend-screen"></div>
        </div>
        
        {/* Right Edge Dynamic Vibrant Glow */}
        <div className="absolute top-0 right-[-80px] w-[100px] md:right-[-120px] md:w-[300px]" style={{ height: '100%' }}>
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
          
          {/* Extended aurora effects for scroll */}
          {/* Blue Glow 4 */}
          <div className="absolute top-[100%] right-0 w-full h-[25%] bg-gradient-to-l from-[#0066ff] via-[#0066ff]/70 via-[#0066ff]/30 to-transparent opacity-100 blur-[28px] md:blur-[55px] animate-glow-flow-right brightness-110 md:brightness-150 mix-blend-screen"></div>
          
          {/* Purple Glow 4 */}
          <div className="absolute top-[120%] right-0 w-full h-[20%] bg-gradient-to-l from-[#7000ff] via-[#7000ff]/65 via-[#7000ff]/25 to-transparent opacity-100 blur-[24px] md:blur-[50px] animate-cloud-drift-left-fast brightness-110 md:brightness-165 mix-blend-screen"></div>
          
          {/* Blue Glow 5 */}
          <div className="absolute top-[135%] right-0 w-full h-[30%] bg-gradient-to-l from-[#0066ff] via-[#0066ff]/75 via-[#0066ff]/35 to-transparent opacity-100 blur-[30px] md:blur-[60px] animate-glow-pulse-move brightness-110 md:brightness-155 mix-blend-screen"></div>
          
          {/* Purple Glow 5 */}
          <div className="absolute top-[160%] right-0 w-full h-[25%] bg-gradient-to-l from-[#7000ff] via-[#7000ff]/70 via-[#7000ff]/30 to-transparent opacity-100 blur-[28px] md:blur-[55px] animate-wave-vertical brightness-110 md:brightness-170 mix-blend-screen"></div>
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

      {/* Hero Section */}
      <div className="flex items-center justify-center min-h-screen px-6 md:px-32 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto w-full animate-slide-up">
          <div className="flex items-center justify-center md:justify-between flex-col md:flex-row gap-10 md:gap-0">
            {/* Left Side - Content */}
            <div className="flex-1 md:pr-8 text-center md:text-left order-2 md:order-1">
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight text-center md:text-left">
                Hi, I'm Siddharth Kambli
              </h1>

              {/* Subheading */}
              <p className="text-lg md:text-2xl text-gray-600 mb-12 leading-relaxed text-center md:text-left">
                I’m a 19-year-old builder studying Computer Science @ Imperial College London. Trying to figure out how the universe works and creating technology that can change it.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-4 mb-16">
                <Link href="/blog" className="border-2 border-[#5b17d1] text-[#5b17d1] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#5b17d1] hover:text-white hover:scale-105 transition-all duration-300 ease-in-out">
                  Read My Blog
                </Link>
              </div>

              {/* Social Icons */}
              <div className="flex justify-center md:justify-start space-x-5 md:space-x-8">
                {/* GitHub */}
                <a href="https://github.com/sidk524" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:text-[#5b17d1] hover:bg-gray-200 hover:scale-110 transition-all duration-300 ease-in-out group">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>

                {/* Twitter/X */}
                <a href="https://x.com/SiddharthK524" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:text-[#5b17d1] hover:bg-gray-200 hover:scale-110 transition-all duration-300 ease-in-out">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/siddharth-kambli-1285b1261/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:text-[#5b17d1] hover:bg-gray-200 hover:scale-110 transition-all duration-300 ease-in-out">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a href="https://www.instagram.com/sid.k_52/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:text-[#5b17d1] hover:bg-gray-200 hover:scale-110 transition-all duration-300 ease-in-out">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* Email */}
                <div className="relative">
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText('siddharthkambli6@gmail.com');
                      setEmailCopied(true);
                      setTimeout(() => {
                        setEmailCopied(false);
                      }, 2000);
                    }}
                    title="Click to copy: siddharthkambli6@gmail.com"
                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:text-[#5b17d1] hover:bg-gray-200 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer group relative"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636C.732 21.003 0 20.271 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.91 6.545-4.91h3.819C23.268 3.821 24 4.553 24 5.457z"/>
                    </svg>
                    
                    {/* Hover tooltip */}
                    <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10 pointer-events-none">
                      siddharthkambli6@gmail.com
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                    </div>
                  </button>
                  
                  {/* Copy notification */}
                  {emailCopied && (
                    <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-sm px-4 py-2 rounded-lg z-20 whitespace-nowrap animate-fade-in">
                      Email copied to clipboard!
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-green-500"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Side - Profile Photo */}
            <div className="flex-shrink-0 ml-0 md:ml-4 order-1 md:order-2">
              <div className="w-40 h-40 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl shadow-black/10 mb-6 md:mb-0">
                <img 
                  src="/profile.jpg" 
                  alt="Siddharth Kambli" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div className="relative z-10 py-20 px-6 animate-fade-in" style={{ animationDelay: '120ms' }}>
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#5b17d1] to-[#0066ff] mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Hey, I'm Siddharth, a 19-year-old studying Computer Science at Imperial College London. 
                I love building things and learning as much as I possibly can - especially across disciplines. 
                Right now, I'm focused on developing a deep, interdisciplinary understanding of engineering, physics, and just life in general.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                I also spend time exploring subjects like politics, history, and philosophy - anything that helps me develop my worldview and understand life. 
                I don't really know where I'm headed yet, but I know that trying to reach my potential is non-negotiable if I want to be fulfilled in life. 
                So that's what I'm doing: learning, building, reflecting, and trying to become a better human.
              </p>

            </div>

            {/* Right side - Currently Reading and Currently */}
            <div className="space-y-8">
              <div className="bg-white/50 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Currently Reading</h3>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <img 
                      src="/steve_jobs.jpg" 
                      alt="Steve Jobs Biography" 
                      className="w-16 h-24 rounded-lg shadow-md object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">Steve Jobs</h4>
                    <p className="text-sm text-gray-600 mb-2">by Walter Isaacson</p>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      The exclusive biography of Apple's co-founder, based on extensive interviews and unprecedented access.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/50 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Currently</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-[#5b17d1] mr-2">•</span>
                    Studying electromagnetism in physics
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5b17d1] mr-2">•</span>
                    Hanging out the bay area
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5b17d1] mr-2">•</span>
                    Researching microwave wireless power transmission
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5b17d1] mr-2">•</span>
                    Reading lots of books
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#5b17d1] mr-2">•</span>
                    Figuring out what to do in life
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
