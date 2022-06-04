import { GetServerSidePropsContext } from 'next'
import Link from 'next/link'

function UserPage({ username, repos }: { username: string; repos: any }) {
  return (
    <>
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
    </>
  )
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const repoData = await fetch(
    `https://api.github.com/users/${query.username}/repos?type=owner&sort=updated&per_page=100`
  ).then(response => response.json())

  console.log(repoData)

  return {
    props: {
      username: query.username,
      repos: repoData,
    },
  }
}

export default UserPage
