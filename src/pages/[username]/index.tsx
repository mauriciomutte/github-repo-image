import { GetServerSidePropsContext } from 'next'
import Link from 'next/link'

import styles from '../../styles/User.module.css'

function UserPage({ username, repos }: { username: string; repos: any }) {
  return (
    <div className={styles.container}>
      <h1>{username}</h1>
      <ul>
        {repos?.map((repo: any) => (
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
  const repoData = await fetch(
    `https://api.github.com/users/${query.username}/repos?type=owner&sort=updated&per_page=100`
  ).then(response => response.json())

  return {
    props: {
      username: query.username,
      repos: repoData,
    },
  }
}

export default UserPage
