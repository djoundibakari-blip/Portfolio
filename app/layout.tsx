import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono"
});

export const viewport: Viewport = {
  themeColor: '#0d1117',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Djoundi Bakari | Alternant Développeur Web',
  description: 'Portfolio de Djoundi Bakari, alternant développeur web à Epitech Lyon. Spécialisé en PHP/Laravel, Java/Spring Boot, JavaScript, Docker et Tailwind CSS.',
  keywords: ['developpeur web', 'alternance', 'PHP', 'Laravel', 'Java', 'Spring Boot', 'JavaScript', 'Docker', 'Tailwind', 'portfolio', 'RNCP', 'Epitech'],
  authors: [{ name: 'Djoundi Bakari' }],
  creator: 'Djoundi Bakari',
  generator: 'Next.js',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    title: 'Djoundi Bakari | Alternant Développeur Web',
    description: 'Portfolio de Djoundi Bakari, alternant développeur web à Epitech Lyon.',
    siteName: 'Portfolio Djoundi Bakari',
  },
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="bg-background" data-theme="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
