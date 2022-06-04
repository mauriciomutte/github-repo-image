import { GetServerSidePropsContext } from 'next'

function UserPage({ username, repos }: { username: string; repos: any }) {
  return (
    <>
      <h1>{username}</h1>
      <ul>
        {repos?.map((repo: any) => (
          <li>
            {repo.name} ({repo.stargazers_count})
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
