import React from 'react'

import styles from './Homepage.module.css'
import {Card} from './Card'

const Homepage = () => {
  return (
    <div className={styles.pageWrapper}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
  )
}

export default Homepage