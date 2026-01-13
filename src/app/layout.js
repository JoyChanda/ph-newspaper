import './globals.css'
import ThemeProvider from '@/components/ThemeProvider';

export const metadata = {
  title: {
    template: '%s | PH Newspaper',
    default: 'PH Newspaper - বাংলাদেশের খবর',
  },
  description: 'বাংলাদেশের সর্বশেষ সংবাদ, রাজনীতি, খেলাধুলা, প্রযুক্তি এবং আরও অনেক কিছু। সত্য ও নিরপেক্ষ সংবাদ পরিবেশনে আমরা প্রতিশ্রুতিবদ্ধ।',
  keywords: ['বাংলাদেশ', 'সংবাদ', 'খবর', 'রাজনীতি', 'খেলাধুলা', 'প্রযুক্তি', 'বিনোদন', 'PH Newspaper'],
  authors: [{ name: 'PH Newspaper Team' }],
  creator: 'PH Newspaper',
  publisher: 'PH Newspaper',
  metadataBase: new URL('http://localhost:3000'), 
  openGraph: {
    title: 'PH Newspaper - বাংলাদেশের খবর',
    description: 'বাংলাদেশের সর্বশেষ সংবাদ, রাজনীতি, খেলাধুলা, প্রযুক্তি এবং আরও অনেক কিছু।',
    url: '/',
    siteName: 'PH Newspaper',
    images: [
      {
        url: '/og-image.jpg', 
        width: 1200,
        height: 630,
        alt: 'PH Newspaper',
      },
    ],
    locale: 'bn_BD',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PH Newspaper - বাংলাদেশের খবর',
    description: 'বাংলাদেশের সর্বশেষ সংবাদ, রাজনীতি, খেলাধুলা, প্রযুক্তি এবং আরও অনেক কিছু।',
    images: ['/og-image.jpg'],
    creator: '@phnewspaper',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  themeColor: '#dc2626',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <body className="antialiased min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
           {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
