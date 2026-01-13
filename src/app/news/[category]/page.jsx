import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getNewsByCategory, getCategoryById } from '@/data/newsData';

export async function generateMetadata({ params }) {
  const { category } = await params;
  const catData = getCategoryById(category);
  
  if (!catData) {
    return {
      title: 'বিভাগ পাওয়া যায়নি | PH Newspaper',
    };
  }

  return {
    title: `${catData.name} - সব খবর | PH Newspaper`,
    description: `${catData.name} বিভাগের সর্বশেষ খবর, বিশ্লেষণ এবং আপডেট।`,
  };
}

export default async function CategoryListingPage({ params, searchParams }) {
  const { category } = await params;
  const query = await searchParams;
  const currentPage = parseInt(query?.page) || 1;
  const sortOption = query?.sort || 'date'; // 'date' | 'popularity'
  
  const catData = getCategoryById(category);
  
  // Logic: Get filtered news
  let news = getNewsByCategory(category);

  if (!catData && category !== 'all') { // Optional: handle 'all' if routed here
     // If category doesn't exist
     return (
       <div className="min-h-screen flex items-center justify-center">
         <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">বিভাগ পাওয়া যায়নি</h1>
            <Link href="/" className="text-red-600 hover:underline">হোমে ফিরে যান</Link>
         </div>
       </div>
     );
  }

  // Sorting
  news = [...news].sort((a, b) => {
    if (sortOption === 'popularity') {
      return b.views - a.views;
    }
    // Default: Date
    return new Date(b.date) - new Date(a.date);
  });

  // Pagination
  const ITEMS_PER_PAGE = 10;
  const totalItems = news.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentNews = news.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                <Link href="/" className="hover:text-white transition-colors">হোম</Link>
                <span>/</span>
                <span className="text-white font-semibold">{catData.name}</span>
              </div>
              <h1 className="text-4xl font-bold">{catData.name}</h1>
              <p className="text-gray-300 mt-2">মোট {totalItems} টি খবর</p>
            </div>

            {/* Sorting Controls */}
            <div className="flex items-center gap-3 bg-white/10 p-1 rounded-lg backdrop-blur-sm self-start">
               <Link
                 href={`/news/${category}?sort=date&page=1`}
                 className={`px-4 py-2 rounded-md text-sm font-semibold transition-all ${
                   sortOption === 'date' 
                     ? 'bg-white text-gray-900 shadow-lg' 
                     : 'text-white hover:bg-white/10'
                 }`}
               >
                 সর্বশেষ
               </Link>
               <Link
                 href={`/news/${category}?sort=popularity&page=1`}
                 className={`px-4 py-2 rounded-md text-sm font-semibold transition-all ${
                   sortOption === 'popularity' 
                     ? 'bg-white text-gray-900 shadow-lg' 
                     : 'text-white hover:bg-white/10'
                 }`}
               >
                 জনপ্রিয়
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
               className="group flex flex-col md:flex-row gap-6 bg-white p-4 rounded-xl shadow-sm hover:shadow-xl transition-all border border-gray-100"
             >
                <div className="relative w-full md:w-64 h-48 md:h-auto flex-shrink-0 rounded-lg overflow-hidden bg-gray-200">
                  {/* Pseudo Image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-600 group-hover:scale-105 transition-transform duration-500"></div>
                  <div className="absolute top-2 left-2 bg-black/60 text-white px-2 py-1 text-xs rounded backdrop-blur-sm">
                    {article.category}
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col justify-center">
                   <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                     {article.title}
                   </h3>
                   <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
                     {article.excerpt}
                   </p>
                   <div className="flex items-center gap-4 text-xs text-gray-500 mt-auto">
                      <span className="flex items-center gap-1">
                        📅 {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        👁️ {article.views.toLocaleString('bn-BD')}
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
           <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
              <p className="text-xl text-gray-500">কোনো খবর পাওয়া যায়নি</p>
           </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center gap-2">
            {/* Previous */}
            {currentPage > 1 && (
              <Link
                href={`/news/${category}?sort=${sortOption}&page=${currentPage - 1}`}
                className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-700"
              >
                ← আগের পেজ
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
                      : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {p.toLocaleString('bn-BD')}
                </Link>
              );
            })}

            {/* Next */}
            {currentPage < totalPages && (
              <Link
                href={`/news/${category}?sort=${sortOption}&page=${currentPage + 1}`}
                className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-700"
              >
                পরের পেজ →
              </Link>
            )}
          </div>
        )}

      </div>
      <Footer />
    </main>
  );
}
