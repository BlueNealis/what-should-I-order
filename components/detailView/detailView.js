import styles from './detailView.module.scss'
import { useEffect, useState } from 'react'
import { randomCocktailCall } from '../../utils/apiCalls'
import Image from 'next/image'

const DetailView = ({refresh}) => {

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
        setIngredients(allIngredients => [...allIngredients,`${drink[measurement]} ${drink[ingredient]}`])
      }
    }
  }

  return(
    <div className={styles.detailBox}>
      <div className={styles.name}>
        <Image className={styles.cocktailImage} src={cocktail?.strDrinkThumb} width={300} height={300} alt={cocktail?.strDrink}/>
        <h1 className={styles.header}>{cocktail?.strDrink}</h1>
      </div>
      <p className={styles.instructions}>{cocktail?.strInstructions}</p>
      <div className={styles.ingredientsOuter}>
        <ul className={styles.ingredients}>
        <p className={styles.paragraph}>Recipe:</p>
        {ingredients?.map((ingredient) => {
        return <li className={styles.paragraph}>{ingredient}</li>
        })}</ul>
      </div>
    </div>
  )
}
export default DetailView
