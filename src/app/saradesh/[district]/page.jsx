'use client';

import Link from 'next/link';
import Image from 'next/image';
import { use } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BreakingNews from '@/components/BreakingNews';
import DistrictStatsChart from '@/components/DistrictStatsChart';
import { getDistrictById } from '@/data/districts';
import { getNewsByDistrict, getDistrictStats, getCategoryById, categories, getTranslatedArticle } from '@/data/newsData';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

export default function DistrictDetailPage({ params: paramsPromise, searchParams: searchParamsPromise }) {
  const params = use(paramsPromise);
  const searchParams = use(searchParamsPromise);
  const { district } = params;
  const { language } = useLanguage();
  const t = translations[language];

  const categoryFilter = searchParams?.category || 'all';
  const sortOption = searchParams?.sort || 'date';

  const districtData = getDistrictById(district);

  if (!districtData) {
     return (
       <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-950">
         <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
              {language === 'bn' ? 'জেলা পাওয়া যায়নি' : 'District Not Found'}
            </h1>
            <Link href="/saradesh" className="text-red-600 hover:underline">
              {language === 'bn' ? 'ম্যাপে ফিরে যান' : 'Back to Map'}
            </Link>
         </div>
       </div>
     );
  }

  // Get Data
  let rawNews = getNewsByDistrict(district);
  const stats = getDistrictStats(district);

  // Filter
  if (categoryFilter !== 'all') {
    rawNews = rawNews.filter(item => item.category === categoryFilter);
  }

  // Sort
  rawNews = [...rawNews].sort((a, b) => {
    if (sortOption === 'popularity') {
      return b.views - a.views;
    }
    return new Date(b.date) - new Date(a.date);
  });

  const news = rawNews.map(item => getTranslatedArticle(item, language));

  const translatedDistrictName = language === 'bn' ? districtData.bnName : districtData.name;
  const translatedDivisionName = language === 'bn' ? districtData.division : districtData.division; // Assuming division names are same or need translation

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
      <Navbar />
      <BreakingNews />
      
      {/* Header Section */}
      <div className="container-custom py-8">
        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-slate-800 transition-all duration-300 p-8 md:p-12">
           <div className="flex flex-col md:flex-row gap-8 items-start">
              
              {/* Title & Info */}
              <div className="flex-1">
                 <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <Link href="/" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">{t.home}</Link> 
                    <span>/</span>
                    <Link href="/saradesh" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">{t.saraDesh}</Link> 
                    <span>/</span>
                    <span className="text-gray-900 dark:text-gray-100 font-bold">{translatedDistrictName}</span>
                 </div>
                 
                 <div className="flex items-center gap-4 mb-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">{translatedDistrictName}</h1>
                    <span className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-3 py-1 rounded-full text-sm font-bold shadow-sm">
                       {translatedDivisionName} {language === 'bn' ? 'বিভাগ' : 'Division'}
                    </span>
                 </div>
                 
                 <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-lg">
                    {language === 'bn' 
                      ? `${translatedDistrictName} জেলার শিক্ষা, রাজনীতি, অর্থনীতি ও জনজীবনের সর্বশেষ সংবাদ।` 
                      : `Latest news and updates on education, politics, economy, and public life of ${translatedDistrictName} district.`}
                 </p>
              </div>

              {/* Chart */}
              <div className="w-full md:w-1/3">
                 <DistrictStatsChart data={stats} />
              </div>
           </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container-custom py-12">
         {/* Filters & Sort */}
         <div className="flex flex-col md:flex-row justify-between items-center bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-slate-800 mb-8 gap-4 transition-colors">
            
            {/* Category Filter */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
               <span className="text-sm font-bold text-gray-700 dark:text-gray-300 whitespace-nowrap">
                 {language === 'bn' ? 'ফিল্টার:' : 'Filter:'}
               </span>
               <Link 
                 href={`/saradesh/${district}?category=all&sort=${sortOption}`}
                 className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap shadow-sm ${
                    categoryFilter === 'all' 
                      ? 'bg-red-600 text-white' 
                      : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-slate-700'
                 }`}
               >
                 {language === 'bn' ? 'সব' : 'All'}
               </Link>
               {categories.map(cat => (
                 <Link
                   key={cat.id}
                   href={`/saradesh/${district}?category=${cat.id}&sort=${sortOption}`}
                   className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap shadow-sm ${
                      categoryFilter === cat.id 
                        ? 'text-white' 
                        : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-slate-700'
                   }`}
                   style={categoryFilter === cat.id ? { backgroundColor: cat.color } : {}}
                 >
                   {t.categories[cat.id] || cat.name}
                 </Link>
               ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
               <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                 {language === 'bn' ? 'সাজান:' : 'Sort by:'}
               </span>
               <div className="flex bg-gray-100 dark:bg-slate-800 rounded-lg p-1 shadow-inner">
                  <Link
                    href={`/saradesh/${district}?category=${categoryFilter}&sort=date`}
                    className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${
                       sortOption === 'date' 
                        ? 'bg-white dark:bg-slate-700 shadow-md text-gray-900 dark:text-white' 
                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                    }`}
                  >
                    {language === 'bn' ? 'সময়' : 'Time'}
                  </Link>
                  <Link
                    href={`/saradesh/${district}?category=${categoryFilter}&sort=popularity`}
                    className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${
                       sortOption === 'popularity' 
                        ? 'bg-white dark:bg-slate-700 shadow-md text-gray-900 dark:text-white' 
                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                    }`}
                  >
                    {language === 'bn' ? 'জনপ্রিয়তা' : 'Popularity'}
                  </Link>
               </div>
            </div>
         </div>

         {/* News List */}
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map(article => (
               <Link
                 key={article.id}
                 href={`/news/${article.category}/${article.id}`}
                 className="group bg-white dark:bg-slate-900 rounded-xl shadow-md border border-gray-100 dark:border-slate-800 overflow-hidden hover:shadow-2xl transition-all card-hover"
               >
                  <div className="aspect-video bg-gray-200 dark:bg-slate-800 relative overflow-hidden">
                     <Image
                        src={article.image || '/images/default-news.jpg'}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                     />
                     <span 
                        className="absolute top-3 left-3 bg-black/60 text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full backdrop-blur-md z-10"
                        style={{ borderLeft: `3px solid ${getCategoryById(article.category)?.color}` }}
                      >
                        {t.categories[article.category] || article.category}
                     </span>
                  </div>
                  <div className="p-6">
                     <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors line-clamp-2 min-h-[3.5rem] leading-tight">
                        {article.title}
                     </h3>
                     <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-6 leading-relaxed">
                        {article.excerpt}
                     </p>
                     <div className="flex items-center justify-between text-[11px] font-semibold text-gray-500 dark:text-gray-500 pt-4 border-t border-gray-50 dark:border-slate-800">
                        <span className="flex items-center gap-1">📅 {article.date}</span>
                        <span className="flex items-center gap-1" suppressHydrationWarning>
                          👁️ {language === 'bn' ? article.views.toLocaleString('bn-BD') : article.views.toLocaleString()} {t.views}
                        </span>
                     </div>
                  </div>
               </Link>
            ))}
         </div>

         {news.length === 0 && (
            <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-2xl border-2 border-dashed border-gray-200 dark:border-slate-800 transition-colors">
               <div className="text-5xl mb-4 opacity-30 text-gray-400">📭</div>
               <p className="text-xl font-semibold text-gray-500 dark:text-gray-400">
                 {language === 'bn' ? "এই ক্যাটাগরিতে কোনো খবর পাওয়া যায়নি" : "No news found in this category"}
               </p>
            </div>
         )}
      </div>

      <Footer />
    </main>
  );
}
