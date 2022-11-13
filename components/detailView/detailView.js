import styles from './detailView.module.scss'
import { useEffect, useState } from 'react'
import {flavors, alcohols} from '../../utils/flavors'
import { randomCocktailCall, ingredientCocktailCall, getDrink } from '../../utils/apiCalls'
import Image from 'next/image'

const DetailView = ({data, key}) => {

  const [cocktail, setCocktail] = useState({})
  const [ingredients, setIngredients] = useState([])

  useEffect(() => {
    if(Object.keys(data).length > 0){
      let preferences = getPreferences();
      ingredientCocktailCall(`${preferences[0]},${preferences[1]}`)
      .then(info => {
        if(info.drinks === 'None Found') {
          window.alert(`No drinks found with search terms ${preferences[0]},${preferences[1]}`)
          getRandomCocktail()
        }
        
        let index = getRandomNumber(info.drinks.length);
        setCocktail(info.drinks[index])

        getDrink(info.drinks[index].idDrink)
        .then(drink => {
          getIngredients(drink.drinks[0])
        })
      })
    }else{
      getRandomCocktail()
  }
  },[])

  const getRandomCocktail = () => {
    randomCocktailCall()
    .then(info => {
      setCocktail(info.drinks[0])
      getIngredients(info.drinks[0])
    })
  }
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

  const getRandomNumber = (ceiling) => {
    return Math.floor(Math.random() * ceiling)
  }

  const getPreferences = () => {
    let preferenceStrings = [];
    Object.values(data).forEach((preference) => {
      if(flavors[preference]){
        let searchTerm = flavors[preference].names[getRandomNumber(flavors[preference].names.length)]
        preferenceStrings.push(searchTerm)
      }
    })
    return preferenceStrings
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
        return <li key={ingredient} className={styles.paragraph}>{ingredient}</li>
        })}</ul>
      </div>
    </div>
  )
}
export default DetailView
