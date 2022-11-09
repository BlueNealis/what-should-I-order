import React from 'react'

export const randomCocktailCall = () => {
  return fetch(`https://www.thecocktaildb.com/api/json/v2/${process.env.NEXT_PUBLIC_API_KEY}/random.php`)
  .then((response) => response.json())
}

export const ingredientCocktailCall = (data) => {
  return fetch(`https://www.thecocktaildb.com/api/json/v2/${process.env.NEXT_PUBLIC_API_KEY}/filter.php?i=${data}`)
    .then((response) => response.json())
}

export const getDrink = (id) => {
  return fetch(`https://www.thecocktaildb.com/api/json/v2/${process.env.NEXT_PUBLIC_API_KEY}/lookup.php?i=${id}`)
    .then((response) => response.json())
}
