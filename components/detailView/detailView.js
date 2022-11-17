import styles from './detailView.module.scss'
import { useEffect, useState } from 'react'
import {flavors, alcohols} from '../../utils/flavors'
import { randomCocktailCall, ingredientCocktailCall } from '../../utils/apiCalls'
import NextImage from 'next/image'

const DetailView = ({data, key}) => {

  const [cocktail, setCocktail] = useState({})
  const [ingredients, setIngredients] = useState([])

  useEffect(() => {
    if(Object.keys(data).length > 0){
      let preferences = getPreferences();
      ingredientCocktailCall(`${preferences}`)
      .then(info => {
        console.log('drinks', info)
        if(info.length === 0) {
          window.alert(`No drinks found with search terms ${preferences}`)
          getRandomCocktail()
        }
        let index = getRandomNumber(info.length);
        setCocktail(info[index])
        getIngredients(info[index])
        })
    }else{
      getRandomCocktail()
  }
  },[])

  const getRandomCocktail = () => {
    randomCocktailCall()
    .then(info => {
      console.log(info)
      setCocktail(info[0])
      getIngredients(info[0])
      console.log(info[0]["image_thumb_url"], 'image')
    })
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
    console.log(data)
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
    </div>
  )
}
export default DetailView
