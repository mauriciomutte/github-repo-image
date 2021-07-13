import { languagePerCent } from '../../helpers/languagePerCent'
import RepoFooter from '../RepoFooter/RepoFooter'
import RepoInfo from '../RepoInfo/RepoInfo'

import styles from './RepoCard.module.css'

type RepoCardProps = {
  userName: string
  userImg: string
  name: string
  description: string
  url: string
  contributions: number
  usedBy: number
  stars: number
  forks: number
}

const mockLanguages = {
  JavaScript: 30231,
  Shell: 35,
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
            <RepoInfo name='contributors' title='Contributors' value={10} />
            <RepoInfo name='usedby' title='Used by' value={28} />
            <RepoInfo name='stars' title='Stars' value={169} />
            <RepoInfo name='forks' title='Forks' value={19} />
          </div>
        </main>
      </div>
      <RepoFooter languages={languagePerCent(mockLanguages)} />
    </section>
  )
}

export default RepoCard
