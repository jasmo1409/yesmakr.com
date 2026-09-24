import { DM_Sans, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' })
const jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-display' })

export const metadata: Metadata = {
  title: 'YesMakr — Fun Yes/No Questions',
  description: 'Create fun, interactive yes/no questions and share them with anyone. The No button has a mind of its own! 😄',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'YesMakr — Fun Yes/No Questions',
    description: 'Create fun, interactive yes/no questions and share them!',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${jakartaSans.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
