import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DistrictStatsChart from '@/components/DistrictStatsChart';
import { getDistrictById } from '@/data/districts';
import { getNewsByDistrict, getDistrictStats, getCategoryById, categories } from '@/data/newsData';

export async function generateMetadata({ params }) {
  const { district } = await params;
  const districtData = getDistrictById(district);
  
  if (!districtData) return { title: 'District Not Found' };

  return {
    title: `${districtData.bnName} - সারা দেশ | PH Newspaper`,
    description: `${districtData.bnName} ${districtData.name} জেলার সর্বশেষ খবর ও আপডেট।`,
  };
}

export default async function DistrictDetailPage({ params, searchParams }) {
  const { district } = await params;
  const query = await searchParams;
  const categoryFilter = query?.category || 'all';
  const sortOption = query?.sort || 'date';

  const districtData = getDistrictById(district);

  if (!districtData) {
     return (
       <div className="min-h-screen flex items-center justify-center">
         <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">জেলা পাওয়া যায়নি</h1>
            <Link href="/saradesh" className="text-red-600 hover:underline">ম্যাপে ফিরে যান</Link>
         </div>
       </div>
     );
  }

  // Get Data
  let news = getNewsByDistrict(district);
  const stats = getDistrictStats(district);

  // Filter
  if (categoryFilter !== 'all') {
    news = news.filter(item => item.category === categoryFilter);
  }

  // Sort
  news = [...news].sort((a, b) => {
    if (sortOption === 'popularity') {
      return b.views - a.views;
    }
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-custom py-8">
           <div className="flex flex-col md:flex-row gap-8 items-start">
              
              {/* Title & Info */}
              <div className="flex-1">
                 <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Link href="/" className="hover:text-red-600">হোম</Link> / 
                    <Link href="/saradesh" className="hover:text-red-600">সারা দেশ</Link> /
                    <span className="text-gray-900 font-bold">{districtData.bnName}</span>
                 </div>
                 
                 <div className="flex items-center gap-4 mb-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{districtData.bnName}</h1>
                    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-bold">
                       {districtData.division} বিভাগ
                    </span>
                 </div>
                 
                 <p className="text-gray-600 max-w-2xl">
                    {districtData.name} জেলার শিক্ষা, রাজনীতি, অর্থনীতি ও জনজীবনের সর্বশেষ সংবাদ।
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
         <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-8 gap-4">
            
            {/* Category Filter */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
               <span className="text-sm font-bold text-gray-700 whitespace-nowrap">ফিল্টার:</span>
               <Link 
                 href={`/saradesh/${district}?category=all&sort=${sortOption}`}
                 className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-colors whitespace-nowrap ${
                    categoryFilter === 'all' ? 'bg-black text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                 }`}
               >
                 সব
               </Link>
               {categories.map(cat => (
                 <Link
                   key={cat.id}
                   href={`/saradesh/${district}?category=${cat.id}&sort=${sortOption}`}
                   className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-colors whitespace-nowrap ${
                      categoryFilter === cat.id 
                        ? 'text-white' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                   }`}
                   style={categoryFilter === cat.id ? { backgroundColor: cat.color } : {}}
                 >
                   {cat.name}
                 </Link>
               ))}
            </div>

            {/* Sort Dropdown (Simulated with Links) */}
            <div className="flex items-center gap-2">
               <span className="text-sm font-bold text-gray-700">সাজান:</span>
               <div className="flex bg-gray-100 rounded-lg p-1">
                  <Link
                    href={`/saradesh/${district}?category=${categoryFilter}&sort=date`}
                    className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
                       sortOption === 'date' ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    সময়
                  </Link>
                  <Link
                    href={`/saradesh/${district}?category=${categoryFilter}&sort=popularity`}
                    className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
                       sortOption === 'popularity' ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    জনপ্রিয়তা
                  </Link>
               </div>
            </div>
         </div>

         {/* News List */}
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map(article => (
               <Link
                 key={article.id}
                 href={`/news/${article.category}/${article.id}`}
                 className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all"
               >
                  <div className="h-48 bg-gray-200 relative overflow-hidden">
                     <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-600 group-hover:scale-110 transition-transform duration-500"></div>
                     <span className="absolute top-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                        {article.category}
                     </span>
                  </div>
                  <div className="p-5">
                     <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors line-clamp-2">
                        {article.title}
                     </h3>
                     <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                        {article.excerpt}
                     </p>
                     <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{article.date}</span>
                        <span>{article.views.toLocaleString()} views</span>
                     </div>
                  </div>
               </Link>
            ))}
         </div>

         {news.length === 0 && (
            <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
               <p className="text-xl text-gray-500">এই ক্যাটাগরিতে কোনো খবর পাওয়া যায়নি</p>
            </div>
         )}
      </div>

      <Footer />
    </main>
  );
}
