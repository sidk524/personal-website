import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Siddharth Kambli",
  description: "Personal site",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <header className="w-full px-4 py-4 border-b border-gray-200">
          <nav className="max-w-3xl mx-auto text-sm text-gray-700">
            <Link href="/" className="hover:underline">home</Link>
            <span className="px-2">/</span>
            <Link href="/projects" className="hover:underline">projects</Link>
            <span className="px-2">/</span>
            <Link href="/blog" className="hover:underline">blog</Link>
          </nav>
        </header>
        <main className="max-w-3xl mx-auto px-4">
          {children}
        </main>
      </body>
    </html>
  );
}
