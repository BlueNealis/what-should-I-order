import styles from './detailView.module.scss'
import { useEffect, useState } from 'react'
import { randomCocktailCall } from '../../utils/apiCalls'
import Image from 'next/image'

const DetailView = () => {

  const [cocktail, setCocktail] = useState({})

  useEffect(() => {
    randomCocktailCall()
    .then(info => {
      setCocktail(info.drinks[0])
    })
  }, [])

  return(
    <div className={styles.detailBox}>
      <h1>{cocktail?.strDrink}</h1>
      <p>{cocktail?.strInstructions}</p>
      <Image src={cocktail?.strDrinkThumb} width={300} height={300} alt={cocktail?.strDrink}/>
      <ul></ul>
    </div>
  )
}
export default DetailView
