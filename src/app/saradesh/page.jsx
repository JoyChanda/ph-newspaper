'use client';

import { useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { districts } from '@/data/districts';
import { getLatestNews } from '@/data/newsData';

// Dynamically import Map component to avoid SSR issues with Leaflet
const BangladeshMap = dynamic(() => import('@/components/Map/BangladeshMap'), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full flex items-center justify-center bg-gray-100 rounded-xl">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
    </div>
  ),
});

export default function SaraDeshPage() {
  const [selectedDistrict, setSelectedDistrict] = useState(districts[0]); // Default Dhaka
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Filter districts based on search
  const filteredDistricts = useMemo(() => {
    if (!searchQuery) return [];
    return districts.filter(d => 
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.bnName.includes(searchQuery)
    );
  }, [searchQuery]);

  // Handle District Selection
  const handleSelectDistrict = (district) => {
    setSelectedDistrict(district);
    setSearchQuery('');
    setIsDropdownOpen(false);
  };

  // Mock News for the selected district (In a real app, filter by district ID)
  const districtNews = getLatestNews().slice(0, 5); 

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <div className="flex-1 container-custom py-8">
        <div className="grid lg:grid-cols-3 gap-8 h-[800px] lg:h-[600px]">
          
          {/* Left Side: Map & Search */}
          <div className="lg:col-span-2 relative h-full flex flex-col gap-4">
            
            {/* Search Bar */}
            <div className="absolute top-4 left-4 right-4 z-[1000] max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="জেলা খুঁজুন... (e.g. Dhaka or ঢাকা)"
                  className="w-full pl-12 pr-4 py-3 rounded-full shadow-lg border-2 border-transparent focus:border-red-500 focus:outline-none bg-white/90 backdrop-blur-sm transition-all"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setIsDropdownOpen(true);
                  }}
                  onFocus={() => setIsDropdownOpen(true)}
                />
                <svg className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>

                {/* Suggestions Dropdown */}
                {isDropdownOpen && filteredDistricts.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden max-h-60 overflow-y-auto">
                    {filteredDistricts.map((district) => (
                      <button
                        key={district.id}
                        className="w-full text-left px-4 py-3 hover:bg-red-50 hover:text-red-600 transition-colors border-b last:border-b-0 border-gray-100 flex justify-between items-center"
                        onClick={() => handleSelectDistrict(district)}
                      >
                        <span className="font-semibold">{district.bnName}</span>
                        <span className="text-xs text-gray-400">{district.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Map Container */}
            <div className="flex-1 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
               <BangladeshMap 
                 selectedDistrict={selectedDistrict} 
                 onSelectDistrict={handleSelectDistrict} 
               />
            </div>
            <p className="text-center text-sm text-gray-500">
               মানচিত্রের যেকোনো জেলায় ক্লিক করুন অথবা সার্চ বক্সে জেলার নাম লিখুন
            </p>
          </div>

          {/* Right Side: District News */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 flex flex-col overflow-hidden h-full">
            {/* District Header */}
            <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-red-600 to-red-700 text-white">
              <h4 className="text-xs font-bold opacity-80 uppercase tracking-widest mb-1">SARA DESH</h4>
              <h2 className="text-3xl font-bold">{selectedDistrict?.bnName}</h2>
              <p className="text-sm opacity-90 mt-1">{selectedDistrict?.name} District</p>
            </div>

            {/* News List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              <div className="text-sm text-gray-500 mb-2">
                এই জেলার সর্বশেষ সংবাদ ({districtNews.length})
              </div>
              
              {districtNews.map((news) => (
                <Link 
                  key={news.id} 
                  href={`/news/${news.category}/${news.id}`}
                  className="block group"
                >
                  <div className="flex gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                     <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                        {/* Placeholder Image */}
                        <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 group-hover:scale-110 transition-transform duration-500"></div>
                     </div>
                     <div className="flex-1">
                        <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-full mb-1 inline-block">
                          {news.category}
                        </span>
                        <h3 className="font-bold text-gray-800 text-sm leading-snug group-hover:text-red-600 transition-colors line-clamp-2">
                          {news.title}
                        </h3>
                        <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                           <span>🕒 {news.date}</span>
                        </p>
                     </div>
                  </div>
                </Link>
              ))}

              <button className="w-full py-2.5 mt-4 text-sm font-bold text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-colors">
                আরও দেখুন
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
