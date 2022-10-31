import styles from './detailView.module.scss'
import { useEffect } from 'react'
import { randomCocktailCall } from '../../utils/apiCalls'
import Image from 'next/image'

export default function detailView() {

  const []

  useEffect(() => {
    randomCocktailCall()
    .then(info => console.log(info))

  }, [])

  return(
    <div className={styles.detailBox}>
      <h1>hello</h1>
      <p>Why wont this show stuff uhg</p>
      <ul></ul>
    </div>
  )
}
