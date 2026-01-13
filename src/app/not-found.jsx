import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-gray-200">404</h1>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            পৃষ্ঠাটি পাওয়া যায়নি
          </h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            দুঃখিত, আপনি যে পৃষ্ঠাটি খুঁজছেন তা বিদ্যমান নেই অথবা সরানো হয়েছে।
          </p>
          <Link 
            href="/"
            className="px-8 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            হোমে ফিরে যান
          </Link>
        </div>
      </div>
    </div>
  );
}
