import Head from 'next/head'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Github OG generator</title>
        <meta name='description' content='Github OG generator' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}></main>
    </div>
  )
}
