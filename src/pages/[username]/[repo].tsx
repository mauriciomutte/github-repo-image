import { GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'

import Header from '../../components/Header/Header'
import RepoCard, { RepoCardProps } from '../../components/RepoCard'
import { languagePerCent } from '../../helpers/languagePerCent'
import { parseRepoFetch } from '../../helpers/parseRepoFetch'
import { getRepoDetails, getRepoLanguages } from '../../services/repos'
import styles from '../../styles/Home.module.css'

function UserRepoPage(props: RepoCardProps) {
  const { userName, name } = props
  const { back } = useRouter()

  return (
    <>
      <Header title={`${userName}/${name}`} onBack={back} />
      <main className={styles.main}>
        <RepoCard {...props} />
      </main>
    </>
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
