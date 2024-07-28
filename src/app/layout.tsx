import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'

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
      <body className={spaceGrotesk.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  )
}
