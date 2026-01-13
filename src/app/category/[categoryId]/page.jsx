import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getNewsByCategory, getCategoryById } from '@/data/newsData';

export async function generateMetadata({ params }) {
  const { categoryId } = await params;
  const category = getCategoryById(categoryId);
  
  if (!category) {
    return {
      title: 'বিভাগ পাওয়া যায়নি | PH Newspaper',
    };
  }

  return {
    title: `${category.name} | PH Newspaper`,
    description: `${category.name} বিভাগের সর্বশেষ খবর এবং আপডেট।`,
  };
}

export default async function CategoryPage({ params }) {
  const { categoryId } = await params;
  const category = getCategoryById(categoryId);
  const news = getNewsByCategory(categoryId);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">বিভাগ পাওয়া যায়নি</h1>
          <Link href="/" className="text-red-600 hover:underline">হোমে ফিরে যান</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Category Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">
              হোম
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-white font-semibold">{category.name}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{category.name}</h1>
          <p className="text-gray-300 text-lg">
            {news.length} টি খবর পাওয়া গেছে
          </p>
        </div>
      </div>

      {/* News Grid */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((article, index) => (
              <Link
                key={article.id}
                href={`/news/${article.category}/${article.id}`}
                className="group bg-white rounded-xl shadow-lg overflow-hidden card-hover fade-in"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
                  <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-0 transition-opacity"></div>
                  
                  {/* Breaking Badge */}
                  {article.isBreaking && (
                    <div className="absolute top-3 left-3 z-10">
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 pulse-glow">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                        </svg>
                        জরুরি
                      </span>
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute bottom-3 left-3 z-10">
                    <span
                      className="category-badge"
                      style={{
                        backgroundColor: category.color,
                        color: 'white'
                      }}
                    >
                      {category.name}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
                    {article.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                        {article.author}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                        {article.views.toLocaleString('bn-BD')}
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

          {/* Empty State */}
          {news.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📰</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">কোনো খবর পাওয়া যায়নি</h3>
              <p className="text-gray-600 mb-6">এই বিভাগে এখনো কোনো খবর প্রকাশিত হয়নি।</p>
              <Link 
                href="/"
                className="inline-block px-6 py-3 bg-gradient-to-r from-red-600 to-blue-600 text-white font-bold rounded-full hover:shadow-lg transition-all hover:scale-105"
              >
                হোমে ফিরে যান
              </Link>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
