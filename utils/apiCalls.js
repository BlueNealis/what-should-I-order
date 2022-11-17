import React from 'react'

export const randomCocktailCall = () => {
  return fetch("http://api-cocktails.herokuapp.com/api/v1/cocktails?random=1", {
    headers: {
      Authorization: `Token token=${process.env.NEXT_PUBLIC_NEW_KEY}`
    }
  })
  .then((response) => response.json())
}

export const ingredientCocktailCall = (data) => {
  return fetch(`http://api-cocktails.herokuapp.com/api/v1/cocktails?ingredients[]=${data}`, {
    headers: {
      Authorization: `Token token=${process.env.NEXT_PUBLIC_NEW_KEY}`
    }
  })
  .then((response) => response.json())
}

export const getDrink = (id) => {
  console.log('id',id)
  return fetch(`https://www.thecocktaildb.com/api/json/v2/${process.env.NEXT_PUBLIC_API_KEY}/lookup.php?i=${id}`)
    .then((response) => response.json())
}
