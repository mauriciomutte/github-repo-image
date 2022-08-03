import { useRouter } from 'next/router'
import { useQueries } from '@tanstack/react-query'

import Header from '../../components/Header/Header'
import RepoCard from '../../components/RepoCard'
import { languagePerCent } from '../../helpers/languagePerCent'
import { parseRepoFetch } from '../../helpers/parseRepoFetch'
import { getRepoDetails, getRepoLanguages } from '../../services/repos'
import styles from '../../styles/Home.module.css'

function UserRepoPage() {
  const { back, query } = useRouter()

  const username = query.username as string
  const repo = query.repo as string

  const results = useQueries({
    queries: [
      {
        queryKey: ['repoDetails', { repo }],
        queryFn: () => getRepoDetails(username, repo),
      },
      {
        queryKey: ['repoLanguages', { repo }],
        queryFn: () => getRepoLanguages(username, repo),
      },
    ],
  })

  const isLoading = results.some(query => query.isLoading)
  const [repoDetails, repoLanguages] = results

  return (
    <>
      <Header title={`${username}/${repo}`} onBack={back} />
      <main className={styles.main}>
        {isLoading ? (
          <p>isLoading</p>
        ) : (
          <RepoCard
            {...parseRepoFetch(repoDetails.data)}
            languages={languagePerCent(repoLanguages.data)}
          />
        )}
      </main>
    </>
  )
}

export default UserRepoPage
