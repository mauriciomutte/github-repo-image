import { useRouter } from 'next/router'

function UserRepoPage() {
  const { query } = useRouter()

  return <h1>User Repo Page: {query?.repo}</h1>
}

export default UserRepoPage
