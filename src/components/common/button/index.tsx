import React from 'react'
import styles from './style.module.css'
const Button = ({onClick, title}) => {
  return (
    <div className={styles.button} onClick={()=> onClick()}>{title}</div>
  )
}

export default Button