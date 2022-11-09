import React from 'react'

export const randomCocktailCall = () => {
  return fetch(`https://www.thecocktaildb.com/api/json/v2/${process.env.NEXT_PUBLIC_API_KEY}/random.php`)
  .then((response) => response.json())
}

export const ingredientCocktailCall = ({data}) => {

}
