import React from 'react'

import colorsJSON from './colors.json'
import styles from './RepoFooter.module.css'

type LanguagesData = {
  language: string
  percentage: number
}

type RepoFooterProps = {
  languages: LanguagesData[]
}

const RepoFooter = ({ languages }: RepoFooterProps) => {
  const colors: any = colorsJSON

  return (
    <footer className={styles.footer}>
      {languages.map(({ percentage, language }) => (
        <span
          key={language}
          className={styles.footerLanguage}
          style={{
            width: `${percentage}%`,
            background: colors[language] ?? '#6a0dad',
          }}
        />
      ))}
    </footer>
  )
}

export default RepoFooter
