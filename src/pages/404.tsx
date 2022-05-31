import { useRouter } from 'next/router'
import { SyntheticEvent, useState } from 'react'

import styles from '../styles/Home.module.css'

export default function Custom404() {
  const router = useRouter()

  const handleBackToHome = () => {
    router.push({
      pathname: '/',
    })
  }

  return (
    <div className={styles.container}>
      <h1>This is not the web page you are looking for</h1>
      <button onClick={handleBackToHome}>Back to home</button>
    </div>
  )
}
