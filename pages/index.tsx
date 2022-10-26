import Head from 'next/head'
import Image from 'next/image'

import styles from '@/pages/index.module.css'
import SlideTest from '@/components/slideTests'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <SlideTest />
        {/* <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1> */}
      </main>
    </div>
  )
}