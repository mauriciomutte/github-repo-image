import { GetServerSidePropsContext } from 'next'
import Head from 'next/head'

import RepoCard, { RepoCardProps } from '../components/RepoCard/RepoCard'
import { languagePerCent } from '../helpers/languagePerCent'
import { parseRepoFetch } from '../helpers/parseRepoFetch'
import styles from '../styles/Home.module.css'

function Home(props: RepoCardProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Github OG generator</title>
        <meta name='description' content='Github OG generator' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <RepoCard {...props} />
      </main>
    </div>
  )
}
export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const { username, repo } = query

  if (!username || !repo) {
    return { notFound: true }
  }

  const repoData = await fetch(
    `https://api.github.com/repos/${username}/${repo}`
  )
    .then(response => {
      if (response.status !== 200) {
        throw new Error(`Failed to fetch repo data: ${response.statusText}`)
      }

      return response.json()
    })
    .then(data => parseRepoFetch(data))

  const languageUrl = repoData.languages_url

  if (!languageUrl) {
    return { notFound: true }
  }

  const languages = await fetch(languageUrl)
    .then(response => response.json())
    .then(data => languagePerCent(data))

  return {
    props: {
      ...repoData,
      languages,
    },
  }
}

export default Home
