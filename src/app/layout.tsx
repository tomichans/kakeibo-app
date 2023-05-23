import Footer from './Footer/page'
import Header from './Header/page'
import './globals.css'
import { Inter } from 'next/font/google'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '家計簿アプリ',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <Header />
        {children}
        <Footer />
      </ChakraProvider>
    </CacheProvider>
  )
}
