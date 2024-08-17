import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import Head from 'next/head'

import { GoogleAnalytics } from '@next/third-parties/google'

import MainLayout from '@/layout/MainLayout'
import { baseUrl } from '@/utils/const'

import './globals.css'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Dechess | The Web3 Online Chess Platform for Mastery and Rewards',
    template: '%s | Dechess'
  },
  description:
    'Play Chess Online with Dechess. Dive into the ultimate chess experience where you can master the game, earn rewards, and connect with players worldwide',
  keywords:
    'Chess, Chess online, Chess board, Chess Game, Dechess, Chess free, Chess app, Blockchain chess, Crypto chess',
  manifest: '/favicon/site.webmanifest',
  openGraph: {
    images: [`${baseUrl}/images/preview-image.png`]
  },
  twitter: {
    card: 'summary_large_image',
    images: `${baseUrl}/images/preview-image.png`
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
