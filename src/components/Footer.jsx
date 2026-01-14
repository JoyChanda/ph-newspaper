'use client';

import Link from 'next/link';
import { categories } from '@/data/newsData';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 pt-16 pb-8 border-t border-gray-200 dark:border-slate-800 transition-colors">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-red-600 to-blue-600 p-2.5 rounded-xl shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
                  <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold gradient-text">{t.appName}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {t.footerAbout}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white dark:bg-slate-900 shadow-md dark:shadow-none border border-gray-100 dark:border-slate-800 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white dark:hover:bg-red-600 transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white dark:bg-slate-900 shadow-md dark:shadow-none border border-gray-100 dark:border-slate-800 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white dark:hover:bg-red-600 transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white dark:bg-slate-900 shadow-md dark:shadow-none border border-gray-100 dark:border-slate-800 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white dark:hover:bg-red-600 transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8">
            <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">{t.quickLinks}</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors flex items-center gap-2 font-medium">
                  <span className="text-red-500">▸</span> {t.backToHome}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors flex items-center gap-2 font-medium">
                  <span className="text-red-500">▸</span> {t.aboutUs}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors flex items-center gap-2 font-medium">
                  <span className="text-red-500">▸</span> {t.contactUs}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors flex items-center gap-2 font-medium">
                  <span className="text-red-500">▸</span> {t.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors flex items-center gap-2 font-medium">
                  <span className="text-red-500">▸</span> {t.termsOfService}
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="lg:pl-8">
            <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">{language === 'bn' ? 'বিভাগসমূহ' : 'Categories'}</h3>
            <ul className="space-y-4">
              {categories.slice(0, 6).map((category) => (
                <li key={category.id}>
                  <Link 
                    href={`/news/${category.id}`} 
                    className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors flex items-center gap-2 font-medium"
                  >
                    <span style={{ color: category.color }}>▸</span> {t.categories[category.id] || category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:pl-8">
            <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">{t.contactUs}</h3>
            <ul className="space-y-5 text-gray-600 dark:text-gray-400">
              <li className="flex items-start gap-4">
                <div className="bg-red-50 dark:bg-red-900/20 p-2 rounded-lg text-red-600 dark:text-red-400 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-sm font-medium">{t.address}</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-red-50 dark:bg-red-900/20 p-2 rounded-lg text-red-600 dark:text-red-400 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-sm font-medium">{t.email}</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-red-50 dark:bg-red-900/20 p-2 rounded-lg text-red-600 dark:text-red-400 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-sm font-medium">{t.phone}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-slate-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-gray-500 dark:text-gray-500 text-sm font-medium text-center md:text-left">
              {t.copyright}
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-sm font-medium text-center md:text-right flex items-center gap-2">
              Made with <span className="text-red-500 animate-pulse">❤</span> in {language === 'bn' ? 'বাংলাদেশ' : 'Bangladesh'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
