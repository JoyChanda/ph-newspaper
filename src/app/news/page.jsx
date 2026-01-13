import Link from 'next/link';
import Navbar from '@/components/Navbar';
import BreakingNews from '@/components/BreakingNews';
import LatestNewsFeed from '@/components/LatestNewsFeed';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'সব খবর | PH Newspaper',
  description: 'বাংলাদেশ ও বিশ্বের সর্বশেষ খবর এখন এক পাতায়।',
};

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <BreakingNews />
      
      {/* Breadcrumb & Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-custom py-8">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
             <Link href="/" className="hover:text-red-600 transition-colors">হোম</Link> 
             <span>/</span> 
             <span className="text-gray-900 font-semibold">খবর</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">সকল খবর</h1>
          <p className="text-gray-500 mt-2">আমাদের পোর্টালে প্রকাশিত সর্বশেষ সকল খবর</p>
        </div>
      </div>

      <LatestNewsFeed />
      <Footer />
    </main>
  );
}
