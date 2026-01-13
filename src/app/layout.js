import './globals.css'

export const metadata = {
  title: 'PH Newspaper - বাংলাদেশের খবর',
  description: 'বাংলাদেশের সর্বশেষ সংবাদ, রাজনীতি, খেলাধুলা, প্রযুক্তি এবং আরও অনেক কিছু',
  keywords: 'বাংলাদেশ, সংবাদ, খবর, রাজনীতি, খেলাধুলা, প্রযুক্তি',
}

export const viewport = {
  themeColor: '#dc2626',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body>
        {children}
      </body>
    </html>
  )
}
