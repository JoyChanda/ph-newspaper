'use client';

import Link from 'next/link';
import { getBreakingNews } from '@/data/newsData';

export default function BreakingNews() {
  const breakingNews = getBreakingNews();

  return (
    <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-3 shadow-lg">
      <div className="container-custom">
        <div className="flex items-center gap-4">
          {/* Breaking Badge */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-white rounded-full pulse-glow"></div>
              <div className="relative bg-white text-red-600 px-4 py-1.5 rounded-full font-bold text-sm flex items-center gap-2">
                <svg className="w-4 h-4 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                জরুরি খবর
              </div>
            </div>
          </div>

          {/* Scrolling News */}
          <div className="flex-1 overflow-hidden">
            <div className="flex animate-scroll hover:pause">
              {/* Duplicate for seamless loop */}
              {[...breakingNews, ...breakingNews].map((news, index) => (
                <Link
                  key={`${news.id}-${index}`}
                  href={`/news/${news.category}/${news.id}`}
                  className="flex-shrink-0 px-8 hover:text-yellow-300 transition-colors font-semibold"
                >
                  <span className="mr-2">🔴</span>
                  {news.title}
                </Link>
              ))}
            </div>
          </div>

          {/* View All Button */}
          <Link
            href="/"
            className="hidden md:block flex-shrink-0 bg-white text-red-600 px-4 py-1.5 rounded-full font-bold text-sm hover:bg-yellow-300 hover:text-red-700 transition-all"
          >
            সব দেখুন
          </Link>
        </div>
      </div>
    </div>
  );
}
