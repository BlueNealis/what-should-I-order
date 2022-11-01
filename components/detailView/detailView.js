import styles from './detailView.module.scss'
import { useEffect, useState } from 'react'
import { randomCocktailCall } from '../../utils/apiCalls'
import Image from 'next/image'

const DetailView = () => {

  const [cocktail, setCocktail] = useState({})
  const [ingredients, setIngredients] = useState([])

  useEffect(() => {
    randomCocktailCall()
    .then(info => {
      setCocktail(info.drinks[0])
      getIngredients(info.drinks[0])
    })
  },[])

    const getIngredients = (drink) => {
      setIngredients([])
    for (let i = 1; i < 15; i++) {
      let ingredient = `strIngredient${i}`
      let measurement = `strMeasure${i}`
      if(drink[ingredient] != null){
        setIngredients(allIngredients => [...allIngredients,`${drink[measurement]}${drink[ingredient]}`])
      }
    }
  }

  return(
    <div className={styles.detailBox}>
      <h1>{cocktail?.strDrink}</h1>
      <p>{cocktail?.strInstructions}</p>
      <Image src={cocktail?.strDrinkThumb} width={300} height={300} alt={cocktail?.strDrink}/>
      <ul>{ingredients?.map((ingredient) => {
        return <li>{ingredient}</li>
      })}</ul>
    </div>
  )
}
export default DetailView
