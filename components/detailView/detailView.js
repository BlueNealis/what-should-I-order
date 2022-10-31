import styles from './detailView.module.scss'
import { useEffect, useState } from 'react'
import { randomCocktailCall } from '../../utils/apiCalls'
import Image from 'next/image'

const DetailView = () => {

  const [cocktail, setCocktail] = useState({})

  useEffect(() => {
    randomCocktailCall()
    .then(info => {
      setCocktail(info.drinks)
    })
  }, [])

  return(
    <div className={styles.detailBox}>
      <h1>hello</h1>
      <p>Why wont this show stuff uhg</p>
      <ul></ul>
    </div>
  )
}
export default DetailView
