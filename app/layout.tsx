import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Modern Walk App',
  description: 'Fashion Retail Web Application',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={inter.className + ' flex flex-col'}>
        <Navbar />
        <hr className="h-2 w-full bg-gray-300" />
        <div className="container mx-auto flex-grow bg-gray-300 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between">{children}</div>
        </div>
      </body>
    </html>
  )
}
