'use client';

import Link from 'next/link';
import Image from 'next/image';
import { use } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BreakingNews from '@/components/BreakingNews';
import { getNewsByCategory, getCategoryById, getTranslatedArticle } from '@/data/newsData';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

export default function CategoryListingPage({ params: paramsPromise, searchParams: searchParamsPromise }) {
  const params = use(paramsPromise);
  const searchParams = use(searchParamsPromise);
  const { category } = params;
  const { language } = useLanguage();
  const t = translations[language];

  const currentPage = parseInt(searchParams?.page) || 1;
  const sortOption = searchParams?.sort || 'date'; // 'date' | 'popularity'
  
  const catData = getCategoryById(category);
  
  // Logic: Get filtered news
  let news = getNewsByCategory(category);

  if (!catData && category !== 'all') {
     return (
       <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-950">
         <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
              {language === 'bn' ? 'বিভাগ পাওয়া যায়নি' : 'Category Not Found'}
            </h1>
            <Link href="/" className="text-red-600 hover:underline">
              {language === 'bn' ? 'হোমে ফিরে যান' : 'Back to Home'}
            </Link>
         </div>
       </div>
     );
  }

  // Sorting
  news = [...news].sort((a, b) => {
    if (sortOption === 'popularity') {
      return b.views - a.views;
    }
    return new Date(b.date) - new Date(a.date);
  });

  // Pagination
  const ITEMS_PER_PAGE = 10;
  const totalItems = news.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentNewsRaw = news.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const currentNews = currentNewsRaw.map(article => getTranslatedArticle(article, language));

  const translatedCatName = t.categories[category] || catData?.name || (language === 'bn' ? 'সকল বিভাগ' : 'All Categories');

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
      <Navbar />
      <BreakingNews />

      {/* Header Section */}
      <div className="container-custom py-8">
        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-slate-800 transition-all duration-300 p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                <Link href="/" className="hover:text-red-500 transition-colors">{t.home}</Link>
                <span>/</span>
                <span className="text-gray-900 dark:text-gray-100 font-semibold">{translatedCatName}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">{translatedCatName}</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2 text-lg">
                {language === 'bn' 
                  ? `মোট ${totalItems.toLocaleString('bn-BD')} টি খবর` 
                  : `Total ${totalItems.toLocaleString()} news articles`}
              </p>
            </div>

            {/* Sorting Controls */}
            <div className="flex items-center gap-2 bg-gray-50 dark:bg-slate-800/50 p-2 rounded-2xl shadow-inner self-start">
               <Link
                 href={`/news/${category}?sort=date&page=1`}
                 className={`px-8 py-2.5 rounded-xl text-sm font-bold transition-all ${
                   sortOption === 'date' 
                     ? 'bg-white dark:bg-slate-700 text-red-600 dark:text-red-400 shadow-lg transform scale-105' 
                     : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                 }`}
               >
                 {language === 'bn' ? 'সর্বশেষ' : 'Latest'}
               </Link>
               <Link
                 href={`/news/${category}?sort=popularity&page=1`}
                 className={`px-8 py-2.5 rounded-xl text-sm font-bold transition-all ${
                   sortOption === 'popularity' 
                     ? 'bg-white dark:bg-slate-700 text-red-600 dark:text-red-400 shadow-lg transform scale-105' 
                     : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                 }`}
               >
                 {language === 'bn' ? 'জনপ্রিয়' : 'Popular'}
               </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom py-12">
        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {currentNews.map((article) => (
             <Link
               key={article.id}
               href={`/news/${article.category}/${article.id}`}
               className="group flex flex-col md:flex-row gap-6 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm hover:shadow-xl transition-all border border-gray-100 dark:border-slate-800"
             >
                <div className="relative w-full md:w-64 aspect-video md:aspect-auto md:h-full flex-shrink-0 rounded-lg overflow-hidden bg-gray-200 dark:bg-slate-800">
                  <Image
                    src={article.image || '/images/default-news.jpg'}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-black/60 text-white px-2 py-1 text-[10px] font-bold uppercase rounded backdrop-blur-sm z-10">
                    {t.categories[article.category] || article.category}
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col justify-center">
                   <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                     {article.title}
                   </h3>
                   <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 text-sm">
                     {article.excerpt}
                   </p>
                   <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-500 mt-auto">
                      <span className="flex items-center gap-1">
                        📅 {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        👁️ {language === 'bn' ? article.views.toLocaleString('bn-BD') : article.views.toLocaleString()}
                      </span>
                      <span className="flex items-center gap-1">
                        ⏱️ {article.readTime}
                      </span>
                   </div>
                </div>
             </Link>
          ))}
        </div>

        {/* Empty State */}
        {currentNews.length === 0 && (
           <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-xl border border-dashed border-gray-300 dark:border-slate-700">
              <p className="text-xl text-gray-500 dark:text-gray-400">
                {language === 'bn' ? 'কোনো খবর পাওয়া যায়নি' : 'No news found'}
              </p>
           </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center gap-2">
            {/* Previous */}
            {currentPage > 1 && (
              <Link
                href={`/news/${category}?sort=${sortOption}&page=${currentPage - 1}`}
                className="px-4 py-2 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 text-gray-700 dark:text-gray-200 transition-colors"
              >
                {language === 'bn' ? '← আগের পেজ' : '← Previous Page'}
              </Link>
            )}

            {/* Page Numbers */}
            {[...Array(totalPages)].map((_, i) => {
              const p = i + 1;
              return (
                <Link
                  key={p}
                  href={`/news/${category}?sort=${sortOption}&page=${p}`}
                  className={`w-10 h-10 flex items-center justify-center rounded-lg font-bold transition-all ${
                    p === currentPage
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-800'
                  }`}
                >
                  {language === 'bn' ? p.toLocaleString('bn-BD') : p}
                </Link>
              );
            })}

            {/* Next */}
            {currentPage < totalPages && (
              <Link
                href={`/news/${category}?sort=${sortOption}&page=${currentPage + 1}`}
                className="px-4 py-2 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 text-gray-700 dark:text-gray-200 transition-colors"
              >
                {language === 'bn' ? 'পরের পেজ →' : 'Next Page →'}
              </Link>
            )}
          </div>
        )}

      </div>
      <Footer />
    </main>
  );
}
