"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full ring-1 ring-gray-200 dark:ring-gray-700 hover:ring-red-500 dark:hover:ring-red-500 transition-all duration-300 bg-white dark:bg-slate-900 shadow-sm"
      aria-label="Toggle Language"
      title={t.toggleLanguage}
    >
      <span className={`text-xs font-bold ${language === 'en' ? 'text-red-600' : 'text-gray-400'}`}>
        EN
      </span>
      <div className="w-[1px] h-3 bg-gray-300 dark:bg-gray-600"></div>
      <span className={`text-xs font-bold ${language === 'bn' ? 'text-red-600' : 'text-gray-400'}`}>
        বাংলা
      </span>
    </button>
  );
}
