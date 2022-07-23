import { GetServerSidePropsContext } from 'next'
import Link from 'next/link'
import { getUserRepos, UserRepoResponse } from '../../services/user'

import styles from '../../styles/User.module.css'

type UserPageProps = {
  username: string
  repos: UserRepoResponse[]
}

function UserPage({ username, repos }: UserPageProps) {
  return (
    <div className={styles.container}>
      <h1>{username}</h1>
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
