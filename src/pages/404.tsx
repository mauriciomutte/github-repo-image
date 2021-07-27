import { useRouter } from 'next/router'
import { SyntheticEvent, useState } from 'react'

import styles from '../styles/Home.module.css'

export default function Custom404() {
  const router = useRouter()

  const [username, setUsername] = useState('')
  const [repo, setRepo] = useState('')

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault()

    router.push({
      pathname: '/',
      query: { username, repo },
    })
  }

  return (
    <div className={styles.container}>
      <h1>Repositório não encontrado</h1>

      <form onSubmit={onSubmit}>
        <input
          type='text'
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <span>/</span>
        <input
          type='text'
          value={repo}
          onChange={({ target }) => setRepo(target.value)}
        />
        <button type='submit'>Pesquisar</button>
      </form>
    </div>
  )
}
