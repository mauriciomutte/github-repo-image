import { useRouter } from 'next/router'

import RepoCard from '../../components/RepoCard'
import styles from '../../styles/Home.module.css'

function UserRepoPage() {
  const { query } = useRouter()

  return (
    <main className={styles.main}>
      <h1>Repo: {query?.repo}</h1>
      <RepoCard
        userName='mauriciomutte'
        userImg='https://github.com/mauriciomutte.png'
        name='mauriciomutte.com'
        description={`💻 My personal blog, I write about technology and things I'm learning. Built in GatsbyJS`}
        url=''
        contributions={4}
        stars={0}
        forks={2}
        issues={2}
        languages={[
          { language: 'TypeScript', percentage: 90 },
          { language: 'HTML', percentage: 10 },
        ]}
      />
    </main>
  )
}

export default UserRepoPage
