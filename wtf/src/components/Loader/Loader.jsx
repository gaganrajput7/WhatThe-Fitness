import React from 'react'
import styles from './loader.module.css'
function Loader() {
  return (
    <div className={styles.loader}>
        <img class="indicator"src="https://wtfup.me/assets/loader.gif"></img>
    </div>
  )
}

export default Loader