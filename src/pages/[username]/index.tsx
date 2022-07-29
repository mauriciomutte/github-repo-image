import { GetServerSidePropsContext } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'

import { getUserRepos, UserRepoResponse } from '../../services/user'
import Header from '../../components/Header/Header'
import styles from '../../styles/User.module.css'

function UserPage() {
  const { query, push } = useRouter()

  const username = query.username as string

  const { data: repos, isLoading } = useQuery(
    ['repos', { username }],
    () => getUserRepos(username),
    { enabled: !!username }
  )

  return (
    <>
      <Header onBack={() => push('/')} title={username} />
      <div className={styles.container}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {repos?.map(repo => (
              <li key={repo.id}>
                <Link href={`${username}/${repo.name}`}>
                  <a>
                    {repo.name} ({repo.stargazers_count})
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}

export const getServerSideProps = ({ query }: GetServerSidePropsContext) => {
  const username = query.username as string

  return { props: { username } }
}

export default UserPage
