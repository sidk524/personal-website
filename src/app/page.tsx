"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [emailCopied, setEmailCopied] = useState(false);
  return (
    <div className="py-8">
      {/* Title + Profile */}
      <section className="flex items-center gap-4 mt-2 mb-4">
        <Image src="/profile.jpg" alt="Profile" width={56} height={56} className="rounded-full object-cover" />
        <h1 className="text-2xl font-semibold text-gray-900">Siddharth Kambli</h1>
      </section>
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="space-y-8">
          {/* About */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">About</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed text-sm">
              <p>
                Hey, I&#39;m Siddharth, a 19-year-old studying Computer Science at Imperial College London. 
                I love building things and learning as much as I possibly can - especially across disciplines. 
                Right now, I&#39;m focused on developing a deep, interdisciplinary understanding of engineering, physics, and just life in general.
              </p>
              <p>
                I also spend time exploring subjects like politics, history, and philosophy - anything that helps me develop my worldview and understand life. 
                I don&#39;t really know where I&#39;m headed yet, but I know that trying to reach my potential is non-negotiable if I want to be fulfilled in life. 
                So that&#39;s what I&#39;m doing: learning, building, reflecting, and trying to become a better human.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact</h3>
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="https://github.com/sidk524" target="_blank" rel="noopener noreferrer" className="underline text-gray-700">GitHub</a>
              <a href="https://x.com/SiddharthK524" target="_blank" rel="noopener noreferrer" className="underline text-gray-700">Twitter</a>
              <a href="https://www.linkedin.com/in/siddharth-kambli-1285b1261/" target="_blank" rel="noopener noreferrer" className="underline text-gray-700">LinkedIn</a>
              <a href="https://www.instagram.com/sid.k_52/" target="_blank" rel="noopener noreferrer" className="underline text-gray-700">Instagram</a>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText('siddharthkambli6@gmail.com');
                  setEmailCopied(true);
                  setTimeout(() => setEmailCopied(false), 2000);
                }}
                className="relative underline text-gray-700"
              >
                Email
                {emailCopied && (
                  <span className="absolute -top-8 left-0 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    Copied!
                  </span>
                )}
              </button>
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Currently Reading */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Currently Reading</h3>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <Image 
                  src="/dune.jpg" 
                  alt="Dune" 
                  width={40}
                  height={60}
                  className="rounded object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 text-sm">Dune</h4>
                <p className="text-xs text-gray-600 mb-1">by Frank Herbert</p>
                <p className="text-xs text-gray-500">Epic science fiction about power, ecology, and fate.</p>
              </div>
            </div>
          </section>
          {/* Currently */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Currently</h3>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>• Doing WPT SBSP research</li>
              <li>• Doing reinforcement learning research on LLMs</li>
              <li>• Cutting in the gym (fr this time)</li>
              <li>• Reading</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}