import React from 'react'
import styles from './Header.module.scss'

function Header() {
  return (
    <div>
      <header className={styles.header}>
        <h1>React + TS</h1>
      </header>
    </div>
  )
}

export default Header