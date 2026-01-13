import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BreakingNews from '@/components/BreakingNews';
import ViewCounter from '@/components/ViewCounter';
import { getNewsById, getCategoryById, getNewsByCategory } from '@/data/newsData';

export async function generateMetadata({ params }) {
  const { id } = await params;
  const newsId = parseInt(id);
  const article = getNewsById(newsId);
  
  if (!article) {
    return {
      title: 'খবর পাওয়া যায়নি | PH Newspaper',
    };
  }

  return {
    title: `${article.title} | PH Newspaper`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function NewsDetailPage({ params }) {
  const { id } = await params;
  const newsId = parseInt(id);
  const article = getNewsById(newsId);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">খবর পাওয়া যায়নি</h1>
          <Link href="/" className="text-red-600 hover:underline">হোমে ফিরে যান</Link>
        </div>
      </div>
    );
  }

  const category = getCategoryById(article.category);
  const relatedNews = getNewsByCategory(article.category)
    .filter(news => news.id !== article.id)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <BreakingNews />

      {/* Article Header */}
      <article className="py-12">
        <div className="container-custom max-w-4xl">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 mb-6 text-sm">
            <Link href="/" className="text-gray-600 hover:text-red-600 transition-colors">
              হোম
            </Link>
            <span className="text-gray-400">/</span>
            <Link 
              href={`/news/${article.category}`}
              className="text-gray-600 hover:text-red-600 transition-colors"
            >
              {category?.name}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-800 font-semibold">খবর</span>
          </div>

          {/* Category & Breaking Badge */}
          <div className="flex items-center gap-3 mb-4">
            <span
              className="category-badge"
              style={{
                backgroundColor: category?.color,
                color: 'white'
              }}
            >
              {category?.name}
            </span>
            {article.isBreaking && (
              <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 pulse-glow">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                জরুরি খবর
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            {article.excerpt}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 pb-6 mb-8 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                {article.author.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{article.author}</p>
                <p className="text-sm text-gray-500">লেখক</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
               <ViewCounter initialViews={article.views} />
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>{article.readTime} পড়ার সময়</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-96 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center text-white text-6xl">
              📰
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                 <p className="text-white text-sm text-center">Image representation for: {article.title}</p>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <p className="text-lg text-gray-800 leading-relaxed mb-6 first-letter:text-6xl first-letter:font-bold first-letter:text-red-600 first-letter:float-left first-letter:mr-3 first-letter:leading-none">
                {article.content}
              </p>
              
              {/* Additional content paragraphs */}
              <p className="text-lg text-gray-800 leading-relaxed mb-6">
                এই ঘটনার প্রেক্ষিতে বিশেষজ্ঞরা মনে করছেন যে আগামী দিনগুলোতে এই বিষয়ে আরও গুরুত্বপূর্ণ উন্নয়ন দেখা যাবে। সংশ্লিষ্ট কর্তৃপক্ষ এই বিষয়ে জনগণের মতামত গ্রহণ করছে এবং প্রয়োজনীয় পদক্ষেপ নিতে প্রস্তুত রয়েছে।
              </p>

              <blockquote className="border-l-4 border-red-600 pl-4 italic my-6 text-gray-700 bg-gray-50 p-4 rounded-r-lg">
                "আমরা এই বিষয়ে সর্বোচ্চ গুরুত্ব দিচ্ছি এবং শীঘ্রই বিস্তারিত জানানো হবে।" - একজন মুখপাত্র
              </blockquote>

              <p className="text-lg text-gray-800 leading-relaxed">
                এই সংক্রান্ত আরও তথ্য ও আপডেট পেতে আমাদের সাথেই থাকুন। আমরা নিয়মিত এই বিষয়ে সর্বশেষ খবর প্রকাশ করব।
              </p>
            </div>

            {/* Share Buttons */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">শেয়ার করুন</h3>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                  Twitter
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
188:                   </svg>
189:                   WhatsApp
190:                 </button>
191:               </div>
192:             </div>
193:           </div>
194:         </div>
195:       </article>
196: 
197:       {/* Related News */}
198:       {relatedNews.length > 0 && (
199:         <section className="py-12 bg-white">
200:           <div className="container-custom max-w-6xl">
201:             <div className="flex items-center gap-3 mb-8">
202:               <div className="h-8 w-1 bg-gradient-to-b from-red-600 to-blue-600 rounded-full"></div>
203:               <h2 className="text-3xl font-bold gradient-text">সম্পর্কিত খবর</h2>
204:             </div>
205: 
206:             <div className="grid md:grid-cols-3 gap-6">
207:               {relatedNews.map((news) => (
208:                 <Link
209:                   key={news.id}
210:                   href={`/news/${news.category}/${news.id}`}
211:                   className="group bg-gray-50 rounded-xl shadow-lg overflow-hidden card-hover"
212:                 >
213:                   <div className="relative h-48 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
214:                     <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-0 transition-opacity"></div>
215:                   </div>
216:                   <div className="p-5">
217:                     <h3 className="text-lg font-bold text-gray-800 group-hover:text-red-600 transition-colors line-clamp-2 mb-2">
218:                       {news.title}
219:                     </h3>
220:                     <p className="text-sm text-gray-600 line-clamp-2">
221:                       {news.excerpt}
222:                     </p>
223:                   </div>
224:                 </Link>
225:               ))}
226:             </div>
227:           </div>
228:         </section>
229:       )}
230: 
231:       <Footer />
232:     </main>
233:   );
234: }
