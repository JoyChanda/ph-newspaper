import Navbar from '@/components/Navbar';
import BreakingNews from '@/components/BreakingNews';
import FeaturedHeadlines from '@/components/FeaturedHeadlines';
import LatestNewsFeed from '@/components/LatestNewsFeed';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <BreakingNews />
      <FeaturedHeadlines />
      <LatestNewsFeed />
      <Footer />
    </main>
  );
}
