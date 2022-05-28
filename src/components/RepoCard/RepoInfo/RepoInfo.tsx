import { ForkSvg, ContributorSvg, IssuesSvg, StarSvg } from './Icons'
import styles from './RepoInfo.module.css'

type RepoInfoName = 'contributors' | 'forks' | 'issues' | 'stars'

type RepoInfoProps = {
  name: RepoInfoName
  title: string
  value: number
}

const RepoInfo = ({ name, title, value }: RepoInfoProps) => {
  const icons = {
    contributors: ContributorSvg,
    forks: ForkSvg,
    issues: IssuesSvg,
    stars: StarSvg,
  }

  const Icon = icons[name]

  return (
    <div className={styles.repoInfoWrapper}>
      <div className={styles.iconWrapper}>
        <Icon />
      </div>
      <div className={styles.content}>
        <span className={styles.value}>{value}</span>
        <span className={styles.name}>{title}</span>
      </div>
    </div>
  )
}

export default RepoInfo
