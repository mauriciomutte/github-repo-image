import { GetServerSidePropsContext } from 'next'

import RepoCard, { RepoCardProps } from '../../components/RepoCard'
import { languagePerCent } from '../../helpers/languagePerCent'
import { parseRepoFetch } from '../../helpers/parseRepoFetch'
import { getRepoDetails, getRepoLanguages } from '../../services/repos'
import styles from '../../styles/Home.module.css'

function UserRepoPage(props: RepoCardProps) {
  return (
    <main className={styles.main}>
      <RepoCard {...props} />
    </main>
  )
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const { username, repo } = query as { username: string; repo: string }

  const [repoDetails, repoLanguages] = await Promise.all([
    getRepoDetails(username, repo),
    getRepoLanguages(username, repo),
  ])

  return {
    props: {
      ...parseRepoFetch(repoDetails),
      languages: languagePerCent(repoLanguages),
    },
  }
}

export default UserRepoPage
