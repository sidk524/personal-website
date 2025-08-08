"use client";
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Sample blog posts data - you can replace this with actual blog posts later
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js and TypeScript",
    excerpt: "Learn how to set up a modern web application using Next.js with TypeScript for better development experience and type safety.",
    content: `
# Getting Started with Next.js and TypeScript

Next.js has become one of the most popular React frameworks for building modern web applications. When combined with TypeScript, it provides an excellent developer experience with static type checking and improved code quality.

## Why Choose Next.js?

Next.js offers several advantages:

- **Server-side rendering (SSR)** for better SEO and performance
- **Static site generation (SSG)** for blazing-fast websites
- **API routes** to build full-stack applications
- **Automatic code splitting** for optimal performance
- **Built-in CSS support** including CSS Modules and Sass

## Setting Up Your Project

To get started with a new Next.js project with TypeScript:

\`\`\`bash
npx create-next-app@latest my-app --typescript
cd my-app
npm run dev
\`\`\`

This command creates a new Next.js project with TypeScript already configured.

## TypeScript Benefits

TypeScript brings several benefits to your Next.js project:

1. **Static type checking** catches errors at compile time
2. **Better IDE support** with autocompletion and refactoring
3. **Self-documenting code** with type annotations
4. **Easier refactoring** as your project grows

## Conclusion

Next.js with TypeScript is a powerful combination for building modern web applications. The setup is straightforward, and the benefits are immediate.

Happy coding!
    `,
    date: "2024-01-15",
    readTime: "5 min read",
    slug: "getting-started-nextjs-typescript"
  },
  {
    id: 2,
    title: "Building Beautiful UIs with Tailwind CSS",
    excerpt: "Discover the power of utility-first CSS framework and how to create stunning, responsive designs with Tailwind CSS.",
    content: `
# Building Beautiful UIs with Tailwind CSS

Tailwind CSS has revolutionized how we approach styling in web development. This utility-first CSS framework provides low-level utility classes to build custom designs without writing CSS.

## What is Tailwind CSS?

Tailwind CSS is a utility-first CSS framework packed with classes like \`flex\`, \`pt-4\`, \`text-center\`, and \`rotate-90\` that can be composed to build any design, directly in your markup.

## Key Benefits

- **Rapid development** with pre-built utilities
- **Consistent design** with design tokens
- **Responsive design** made easy
- **Small bundle size** with purging unused CSS

## Getting Started

Install Tailwind CSS in your project:

\`\`\`bash
npm install -D tailwindcss
npx tailwindcss init
\`\`\`

Configure your template paths in \`tailwind.config.js\`:

\`\`\`javascript
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
\`\`\`

## Example Component

Here's a simple card component built with Tailwind:

\`\`\`jsx
function Card() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
    </div>
  )
}
\`\`\`

## Conclusion

Tailwind CSS empowers developers to build beautiful, responsive interfaces quickly and efficiently. Give it a try in your next project!
    `,
    date: "2024-01-20",
    readTime: "7 min read",
    slug: "beautiful-uis-tailwind-css"
  },
  {
    id: 3,
    title: "Modern JavaScript: ES6+ Features You Should Know",
    excerpt: "Explore the latest JavaScript features that will make your code more readable, maintainable, and efficient.",
    content: `
# Modern JavaScript: ES6+ Features You Should Know

JavaScript has evolved significantly since ES6 (ES2015). Let's explore some of the most important features that every modern JavaScript developer should know.

## Arrow Functions

Arrow functions provide a more concise syntax for writing functions:

\`\`\`javascript
// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;
\`\`\`

## Destructuring

Destructuring allows you to extract values from arrays and objects:

\`\`\`javascript
// Array destructuring
const [first, second] = [1, 2, 3];

// Object destructuring
const { name, age } = { name: 'John', age: 30 };
\`\`\`

## Template Literals

Template literals make string interpolation easier:

\`\`\`javascript
const name = 'World';
const greeting = \`Hello, \${name}!\`;
\`\`\`

## Async/Await

Async/await makes working with promises more readable:

\`\`\`javascript
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}
\`\`\`

## Spread Operator

The spread operator is useful for arrays and objects:

\`\`\`javascript
// Array spread
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

// Object spread
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
\`\`\`

## Conclusion

These ES6+ features make JavaScript more powerful and enjoyable to write. Start incorporating them into your code today!
    `,
    date: "2024-01-25",
    readTime: "8 min read",
    slug: "modern-javascript-es6-features"
  }
];

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(post => post.slug === params.slug);

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
              className="blog-content"
              dangerouslySetInnerHTML={{ 
                __html: post.content.replace(/\n/g, '<br/>').replace(/```(\w+)?\n([\s\S]*?)\n```/g, '<pre><code>$2</code></pre>').replace(/`([^`]+)`/g, '<code>$1</code>').replace(/^# (.*$)/gim, '<h1>$1</h1>').replace(/^## (.*$)/gim, '<h2>$1</h2>').replace(/^### (.*$)/gim, '<h3>$1</h3>').replace(/^\- (.*$)/gim, '<li>$1</li>').replace(/^\d+\. (.*$)/gim, '<li>$1</li>')
              }}
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