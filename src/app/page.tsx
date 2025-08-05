export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-purple-50">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Profile Photo Placeholder */}
          <div className="w-48 h-48 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
            <span className="text-purple-600 text-sm font-medium">Photo Placeholder</span>
          </div>
          
          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-[#5b17d1] bg-clip-text text-transparent">
              Siddharth Kambli
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Software Engineer & Developer
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          About Me
        </h2>
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20">
          <p className="text-gray-600 text-center italic">
            About me content will go here...
          </p>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Work Experience
        </h2>
        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-shadow duration-300">
            <p className="text-gray-600 text-center italic">
              Work experience entries will be added here...
            </p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Blog
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <p className="text-gray-600 text-center italic">
              Blog posts will be featured here...
            </p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <p className="text-gray-600 text-center italic">
              More blog content...
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-12 text-center">
        <div className="border-t border-purple-200 pt-8">
          <p className="text-gray-600">
            © 2024 Siddharth Kambli. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
