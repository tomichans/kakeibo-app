import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'
import { Providers } from './providers'

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
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
