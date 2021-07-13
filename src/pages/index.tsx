import Head from 'next/head'

import RepoCard from '../components/RepoCard/RepoCard'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Github OG generator</title>
        <meta name='description' content='Github OG generator' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <RepoCard
          userName='mauriciomutte'
          userImg='https://github.com/mauriciomutte.png'
          name='mauriciomutte.com'
          description={`💻 My personal blog, I write about technology and things I'm learning. Built in GatsbyJS`}
          url=''
          contributions={4}
          usedBy={0}
          stars={0}
          forks={2}
        />
      </main>
    </div>
  )
}
