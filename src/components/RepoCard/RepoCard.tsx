import styles from './RepoCard.module.css'
import RepoFooter, { LanguagesData } from './RepoFooter'
import RepoInfo from './RepoInfo'

export type RepoCardProps = {
  userName: string
  userImg: string
  name: string
  description: string
  url: string
  contributions: number
  issues: number
  stars: number
  forks: number
  languages: LanguagesData[]
}

const RepoCard = (props: RepoCardProps) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.infos}>
            <h1 className={styles.title}>
              {props.userName}/<span>{props.name}</span>
            </h1>
            <p className={styles.description}>{props.description}</p>
          </div>

          <img
            className={styles.img}
            src={props.userImg || ''}
            alt={`${props.userName} image`}
          />
        </header>

        <main>
          <div className={styles.stats}>
            <RepoInfo name='stars' title='Stars' value={props.stars} />
            <RepoInfo name='issues' title='Issues' value={props.issues} />
            <RepoInfo
              name='contributors'
              title='Contributors'
              value={props.contributions}
            />
            <RepoInfo name='forks' title='Forks' value={props.forks} />
          </div>
        </main>
      </div>
      <RepoFooter languages={props.languages} />
    </section>
  )
}

export default RepoCard
