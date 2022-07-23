import Image from 'next/image'

import styles from './Header.module.css'

const GITHUB_URL = 'hthttps://github.com/mauriciomutte/github-og-image'

type HeaderProps = {
  title: string
  onBack: () => void
}

const Header = ({ title, onBack }: HeaderProps) => (
  <header className={styles.header}>
    <button className={styles.backButton} onClick={onBack}>
      <Image src='/icons/back.svg' width={20} height={20} />
      Voltar
    </button>
    <h1 className={styles.headerTitle}>{title}</h1>
    <a
      href={GITHUB_URL}
      className={styles.socialLink}
      target='_blank'
      rel='noopener'
    >
      <Image src='/icons/github.svg' width={24} height={24} />
    </a>
  </header>
)

export default Header
