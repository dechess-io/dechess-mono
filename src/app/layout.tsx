import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import Head from 'next/head'

import { GoogleAnalytics } from '@next/third-parties/google'

import MainLayout from '@/layout/MainLayout'

import './globals.css'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Your Site Title',
    template: '%s | Your Site Title'
  },
  description: 'Your site description',
  keywords: 'keyword1, keyword2, keyword3',
  manifest: '/favicon/site.webmanifest',
  twitter: {
    card: 'summary_large_image'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body className={`cz-shortcut-listen ${spaceGrotesk.className}`}>
        <MainLayout>{children}</MainLayout>
      </body>
      <GoogleAnalytics gaId="G-S5V0EXRDTL" />
    </html>
  )
}
