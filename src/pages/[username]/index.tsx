import { GetServerSidePropsContext } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { getUserRepos, UserRepoResponse } from '../../services/user'
import Header from '../../components/Header/Header'
import styles from '../../styles/User.module.css'

type UserPageProps = {
  username: string
  repos: UserRepoResponse[]
}

function UserPage({ username, repos }: UserPageProps) {
  const { push } = useRouter()

  return (
    <>
      <Header onBack={() => push('/')} title={username} />
      <div className={styles.container}>
        <ul>
          {repos?.map(repo => (
            <li>
              <Link href={`${username}/${repo.name}`}>
                <a>
                  {repo.name} ({repo.stargazers_count})
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const repos = await getUserRepos(query.username as string)

  return {
    props: {
      username: query.username,
      repos,
    },
  }
}

export default UserPage
