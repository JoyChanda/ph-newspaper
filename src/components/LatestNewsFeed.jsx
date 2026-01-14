'use client';

import Link from 'next/link';
import { useState } from 'react';
import { categories, getNewsByCategory, getCategoryById, getTranslatedArticle } from '@/data/newsData';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

export default function LatestNewsFeed() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { language } = useLanguage();
  const t = translations[language];

  const rawNews = selectedCategory === 'all' 
    ? getNewsByCategory('all') 
    : getNewsByCategory(selectedCategory);

  const news = rawNews.map(article => getTranslatedArticle(article, language));

  return (
    <section className="py-12 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="h-8 w-1 bg-gradient-to-b from-red-600 to-blue-600 rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">{t.latestNews}</h2>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8 overflow-x-auto pb-4">
          <div className="flex gap-3 min-w-max">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-red-600 to-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 shadow border border-transparent dark:border-slate-700'
              }`}
            >
              {t.allNews}
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
                  selectedCategory === category.id
                    ? 'text-white shadow-lg scale-105'
                    : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 shadow border border-transparent dark:border-slate-700'
                }`}
                style={{
                  backgroundColor: selectedCategory === category.id ? category.color : undefined
                }}
              >
                {t.categories[category.id] || category.name}
              </button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((article, index) => (
            <Link
              key={article.id}
              href={`/news/${article.category}/${article.id}`}
              className="group bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden card-hover fade-in flex flex-col h-full border border-gray-100 dark:border-slate-700 transition-colors"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 dark:from-slate-700 dark:to-slate-600 shrink-0">
                <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-0 transition-opacity"></div>
                
                {/* Breaking Badge */}
                {article.isBreaking && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 pulse-glow">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                      </svg>
                      {language === 'bn' ? 'জরুরি' : 'Breaking'}
                    </span>
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute bottom-3 left-3 z-10">
                  <span
                    className="category-badge"
                    style={{
                      backgroundColor: getCategoryById(article.category)?.color,
                      color: 'white'
                    }}
                  >
                    {t.categories[article.category] || getCategoryById(article.category)?.name}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors line-clamp-2">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 text-sm">
                  {article.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-100 dark:border-slate-700 mt-auto">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                      {article.author}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1" suppressHydrationWarning>
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                      {language === 'bn' ? article.views.toLocaleString('bn-BD') : article.views.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      {article.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-blue-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105">
            <span className="relative z-10">{language === 'bn' ? 'আরও খবর দেখুন' : 'See More News'}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </div>
      </div>
    </section>
  );
}
