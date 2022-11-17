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
  return fetch(`http://api-cocktails.herokuapp.com/api/v1/cocktails?ingredients_only[]=${data}`, {
    headers: {
      Authorization: `Token token=${process.env.NEXT_PUBLIC_NEW_KEY}`
    }
  })
  .then((response) => response.json())
}
