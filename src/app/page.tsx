export default function Home() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Interwoven Color Bands Tapestry */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Left Edge Dynamic Vibrant Glow */}
        <div className="absolute top-0 left-[-120px] w-[300px] h-full">
          {/* Ultra-Vibrant Purple Glow 1 */}
          <div className="absolute top-[0%] left-0 w-full h-[30%] bg-gradient-to-r from-[#8000ff] via-[#8000ff]/80 via-[#8000ff]/40 to-transparent opacity-100 blur-[60px] animate-glow-flow-left brightness-150 mix-blend-screen"></div>
          
          {/* Blazing Orange Glow 1 */}
          <div className="absolute top-[20%] left-0 w-full h-[25%] bg-gradient-to-r from-[#ff3300] via-[#ff3300]/75 via-[#ff3300]/35 to-transparent opacity-100 blur-[55px] animate-cloud-drift-right-fast brightness-140 mix-blend-screen"></div>
          
          {/* Electric Purple Glow 2 */}
          <div className="absolute top-[40%] left-0 w-full h-[20%] bg-gradient-to-r from-[#9932cc] via-[#9932cc]/80 via-[#9932cc]/40 to-transparent opacity-100 blur-[65px] animate-glow-pulse-move brightness-160 mix-blend-screen"></div>
          
          {/* Molten Orange Glow 2 */}
          <div className="absolute top-[55%] left-0 w-full h-[25%] bg-gradient-to-r from-[#ff2000] via-[#ff2000]/75 via-[#ff2000]/35 to-transparent opacity-100 blur-[58px] animate-wave-diagonal brightness-145 mix-blend-screen"></div>
          
          {/* Royal Purple Glow 3 */}
          <div className="absolute top-[75%] left-0 w-full h-[30%] bg-gradient-to-r from-[#7b00ff] via-[#7b00ff]/80 via-[#7b00ff]/40 to-transparent opacity-100 blur-[62px] animate-cloud-drift-left-fast brightness-155 mix-blend-screen"></div>
        </div>
        
        {/* Right Edge Dynamic Vibrant Glow */}
        <div className="absolute top-0 right-[-120px] w-[300px] h-full">
          {/* Fiery Orange Glow 1 */}
          <div className="absolute top-[0%] right-0 w-full h-[30%] bg-gradient-to-l from-[#ff1500] via-[#ff1500]/80 via-[#ff1500]/40 to-transparent opacity-100 blur-[60px] animate-glow-flow-right brightness-150 mix-blend-screen"></div>
          
          {/* Vivid Purple Glow 1 */}
          <div className="absolute top-[20%] right-0 w-full h-[25%] bg-gradient-to-l from-[#8a2be2] via-[#8a2be2]/75 via-[#8a2be2]/35 to-transparent opacity-100 blur-[55px] animate-cloud-drift-left-fast brightness-140 mix-blend-screen"></div>
          
          {/* Burning Orange Glow 2 */}
          <div className="absolute top-[40%] right-0 w-full h-[20%] bg-gradient-to-l from-[#ff4000] via-[#ff4000]/80 via-[#ff4000]/40 to-transparent opacity-100 blur-[65px] animate-glow-pulse-move brightness-160 mix-blend-screen"></div>
          
          {/* Deep Purple Glow 2 */}
          <div className="absolute top-[55%] right-0 w-full h-[25%] bg-gradient-to-l from-[#6a0dad] via-[#6a0dad]/75 via-[#6a0dad]/35 to-transparent opacity-100 blur-[58px] animate-wave-vertical brightness-145 mix-blend-screen"></div>
          
          {/* Sunset Orange Glow 3 */}
          <div className="absolute top-[75%] right-0 w-full h-[30%] bg-gradient-to-l from-[#ff3000] via-[#ff3000]/80 via-[#ff3000]/40 to-transparent opacity-100 blur-[62px] animate-cloud-drift-right-fast brightness-155 mix-blend-screen"></div>
        </div>
      </div>

      {/* Floating Glassomorphic Navbar */}
      <nav className="fixed top-6 left-6 right-6 z-50">
        <div className="bg-white/12 backdrop-blur-xl border border-white/20 rounded-full px-20 py-3 shadow-2xl shadow-black/10">
          <div className="flex justify-between items-center">
            {/* Logo/Name */}
            <div className="text-gray-900 font-bold text-lg">
              SK
            </div>
            
            {/* Nav Links */}
            <div className="flex space-x-12">
              <a href="#" className="text-gray-700 hover:text-[#5b17d1] transition-colors duration-300 font-medium">
                Projects
              </a>
              <a href="#" className="text-gray-700 hover:text-[#5b17d1] transition-colors duration-300 font-medium">
                Blog
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex items-center justify-center min-h-screen px-32 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Left Side - Content */}
            <div className="flex-1 pr-8">
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Hi, I'm Siddharth Kambli
              </h1>

              {/* Subheading */}
              <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
                I craft beautiful digital experiences and build products that people love. 
                Full-stack developer with a passion for clean code and modern design.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <button className="bg-[#5b17d1] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#4a12b0] hover:scale-105 transition-all duration-300 ease-in-out shadow-lg shadow-[#5b17d1]/25 hover:shadow-xl hover:shadow-[#5b17d1]/40">
                  See My Projects
                </button>
                <button className="border-2 border-[#5b17d1] text-[#5b17d1] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#5b17d1] hover:text-white hover:scale-105 transition-all duration-300 ease-in-out">
                  Read My Blog
                </button>
              </div>

              {/* Social Icons */}
              <div className="flex space-x-8">
                {/* GitHub */}
                <a href="#" className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:text-[#5b17d1] hover:bg-gray-200 hover:scale-110 transition-all duration-300 ease-in-out group">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>

                {/* Twitter/X */}
                <a href="#" className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:text-[#5b17d1] hover:bg-gray-200 hover:scale-110 transition-all duration-300 ease-in-out">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a href="#" className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:text-[#5b17d1] hover:bg-gray-200 hover:scale-110 transition-all duration-300 ease-in-out">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>

                {/* Substack */}
                <a href="#" className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:text-[#5b17d1] hover:bg-gray-200 hover:scale-110 transition-all duration-300 ease-in-out">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.539 8.242h-1.538V5.693c0-.299-.242-.542-.542-.542H9.428c-.299 0-.542.243-.542.542v2.549H7.348c-.299 0-.542.242-.542.542v7.595c0 .299.243.542.542.542h1.538v2.549c0 .299.243.542.542.542h11.031c.299 0 .542-.243.542-.542V8.784c0-.299-.243-.542-.542-.542zM22.539 19.235l-9.91-3.45-9.91 3.45v-3.014L12.629 12.4l9.91 3.821v3.014zM12.629 11.355l-9.91-3.821v-3.013l9.91 3.45 9.91-3.45v3.013l-9.91 3.821z"/>
                  </svg>
                </a>

                {/* Email */}
                <a href="#" className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:text-[#5b17d1] hover:bg-gray-200 hover:scale-110 transition-all duration-300 ease-in-out">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636C.732 21.003 0 20.271 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.91 6.545-4.91h3.819C23.268 3.821 24 4.553 24 5.457z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Side - Profile Photo */}
            <div className="flex-shrink-0 ml-4">
              <div className="w-72 h-72 rounded-full overflow-hidden shadow-2xl shadow-black/10">
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
    </div>
  );
}
