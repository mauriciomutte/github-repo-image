import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'

import styles from '../styles/Home.module.css'

function Home() {
  const { push } = useRouter()
  const [searchValue, setSearchValue] = useState('')

  const handleSearchUser = () => {
    push(`/${searchValue}`)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Github OG generator</title>
        <meta name='description' content='Github OG generator' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Search Github username</h1>
        <input
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
        />
        <button onClick={handleSearchUser}>Search</button>
      </main>
    </div>
  )
}

export default Home
