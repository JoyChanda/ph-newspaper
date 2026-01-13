"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 group ring-1 ring-gray-200 dark:ring-gray-700 hover:ring-red-500 dark:hover:ring-red-500"
      aria-label="Toggle Dark Mode"
      title={theme === "dark" ? "লাইট মোড চালু করুন" : "ডার্ক মোড চালু করুন"}
    >
      <div className="relative w-5 h-5">
        {/* Sun Icon */}
        <svg
          className={`absolute inset-0 w-full h-full transform transition-transform duration-500 ${
            theme === 'dark' ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100 text-yellow-500'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
        
        {/* Moon Icon */}
        <svg
          className={`absolute inset-0 w-full h-full transform transition-transform duration-500 ${
            theme === 'dark' ? 'rotate-0 opacity-100 text-blue-400' : '-rotate-90 opacity-0'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </div>
      
      {/* Tooltip Text (Optional, visually hidden, but nice for a11y) */}
      <span className="sr-only">Toggle Theme</span>
    </button>
  );
}
