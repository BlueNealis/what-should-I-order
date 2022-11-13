import React from 'react'

export const randomCocktailCall = () => {
  fetch("http://api-cocktails.herokuapp.com/api/v1/cocktails?name=ginger", {
    headers: {
      Authorization: `Token token=${process.env.NEXT_PUBLIC_NEW_KEY}`
    }
  })
  .then((response) => response.json())
  .then((info) => console.log(info))
}

export const ingredientCocktailCall = (data) => {
  return fetch(`https://www.thecocktaildb.com/api/json/v2/${process.env.NEXT_PUBLIC_API_KEY}/filter.php?i=${data}`)
    .then((response) => response.json())
}

export const getDrink = (id) => {
  console.log('id',id)
  return fetch(`https://www.thecocktaildb.com/api/json/v2/${process.env.NEXT_PUBLIC_API_KEY}/lookup.php?i=${id}`)
    .then((response) => response.json())
}
