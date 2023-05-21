import Head from 'next/head'
import Footer from './components/Footer'
import Header from './components/Header'
import styles from './page.module.css'
import Main from './components/Main'

export default function Home() {
  return (
    <>
      <Head>
        <title>家計簿アプリ</title>
      </Head>
      <Header />
      <Main />
      <h1 className={styles.hello}>Hello, World</h1>
      <Footer />
    </>
  ) 
}
