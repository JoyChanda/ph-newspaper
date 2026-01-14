'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import BreakingNews from '@/components/BreakingNews';
import LatestNewsFeed from '@/components/LatestNewsFeed';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

export default function NewsPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
      <Navbar />
      <BreakingNews />
      
      {/* Breadcrumb & Header */}
      <div className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 transition-colors">
        <div className="container-custom py-8">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
             <Link href="/" className="hover:text-red-600 transition-colors">{t.home}</Link> 
             <span>/</span> 
             <span className="text-gray-900 dark:text-gray-100 font-semibold">{language === 'bn' ? 'খবর' : 'News'}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            {language === 'bn' ? 'সকল খবর' : 'All News'}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            {language === 'bn' ? 'আমাদের পোর্টালে প্রকাশিত সর্বশেষ সকল খবর' : 'Latest news published on our portal'}
          </p>
        </div>
      </div>

      <LatestNewsFeed />
      <Footer />
    </main>
  );
}
