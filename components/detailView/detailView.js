import styles from './detailView.module.scss'
import { useEffect, useState } from 'react'
import {flavors, alcohols} from '../../utils/flavors'
import { randomCocktailCall, ingredientCocktailCall } from '../../utils/apiCalls'
import NextImage from 'next/image'

const DetailView = ({data, key, handleNoMatch}) => {

  const [cocktail, setCocktail] = useState({})
  const [ingredients, setIngredients] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if(Object.keys(data).length > 0){
      let preferences = getPreferences()
      getCocktailByIngredient(Object.values(data))
    }else{
      getRandomCocktail()
  }
  },[])

  const getCocktailByIngredient = async (preferences) => {
    ingredientCocktailCall(`${preferences}`)
    .then(info => {
      if(info.length === 0) {
        randomCocktailCall()
        handleNoMatch(preferences)
        return
        }else{
        let index = getRandomNumber(info.length);
        setCocktail(info[index])
        getIngredients(info[index])
        return true
    }
      })
  }

  const getRandomCocktail = () => {
    randomCocktailCall()
    .then(info => {
      setCocktail(info[0])
      getIngredients(info[0])
    })
    .catch(error => console.log(error))
  }

    const getIngredients = (drink) => {
      setIngredients([])
      setIngredients(drink.ingredients)
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
      } else if(alcohols[preference]) {
        let searchTerm = alcohols[preference].names[getRandomNumber(alcohols[preference].names.length)]
        preferenceStrings.push(searchTerm)
      }
    })
    return preferenceStrings
  }

  return(
    <div className={styles.detailBox}>
      <div className={styles.name}>
        <img className={styles.cocktailImage} src={cocktail["image_large_url"] || cocktail["image_thumb_url"] } width={300} height={250} alt={cocktail?.name}/>
        <h1 className={styles.header}>{cocktail?.name}</h1>
      </div>
      <p className={styles.instructions}>{cocktail?.description}</p>
      <div className={styles.ingredientsOuter}>
        <ul className={styles.ingredients}>
        <p className={styles.paragraph}>Recipe:</p>
        {ingredients?.map((ingredient) => {
        return <li key={ingredient} className={styles.paragraph}>{ingredient}</li>
        })}</ul>
      </div>
      <h1>{errorMessage}</h1>
    </div>
  )
}
export default DetailView
