'use client';

import Link from 'next/link';
import Image from 'next/image';
import { getFeaturedNews, getCategoryById } from '@/data/newsData';

export default function FeaturedHeadlines() {
  const featuredNews = getFeaturedNews();
  const mainNews = featuredNews[0];
  const sideNews = featuredNews.slice(1, 4);

  return (
    <section className="py-12">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="h-8 w-1 bg-gradient-to-b from-red-600 to-blue-600 rounded-full"></div>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">বিশেষ শিরোনাম</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Main Featured News */}
          {mainNews && (
            <Link
              href={`/news/${mainNews.category}/${mainNews.id}`}
              className="group relative overflow-hidden rounded-2xl shadow-2xl card-hover h-[500px]"
            >
              {/* Background Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900">
                <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-30 transition-opacity"></div>
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-8 text-white z-10">
                {/* Category Badge */}
                <div className="mb-4">
                  <span
                    className="category-badge"
                    style={{
                      backgroundColor: getCategoryById(mainNews.category)?.color,
                      color: 'white'
                    }}
                  >
                    {getCategoryById(mainNews.category)?.name}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-yellow-300 transition-colors">
                  {mainNews.title}
                </h3>

                {/* Excerpt */}
                <p className="text-lg text-gray-200 mb-4 line-clamp-2">
                  {mainNews.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-300">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    {mainNews.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    {mainNews.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                    {mainNews.views.toLocaleString('bn-BD')}
                  </span>
                </div>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none"></div>
            </Link>
          )}

          {/* Side Featured News */}
          <div className="flex flex-col gap-6">
            {sideNews.map((news) => (
              <Link
                key={news.id}
                href={`/news/${news.category}/${news.id}`}
                className="group relative overflow-hidden rounded-xl shadow-lg card-hover bg-white dark:bg-slate-800 transition-colors"
              >
                <div className="flex gap-4 p-4">
                  {/* Thumbnail */}
                  <div className="relative w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
                    <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-0 transition-opacity"></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-between">
                    {/* Category */}
                    <div>
                      <span
                        className="category-badge text-xs"
                        style={{
                          backgroundColor: getCategoryById(news.category)?.color + '20',
                          color: getCategoryById(news.category)?.color
                        }}
                      >
                        {getCategoryById(news.category)?.name}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="text-lg font-bold text-gray-800 dark:text-gray-100 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors line-clamp-2 my-2">
                      {news.title}
                    </h4>

                    {/* Meta */}
                    <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        {news.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                        {news.views.toLocaleString('bn-BD')}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
