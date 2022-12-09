import React from 'react'

export const randomCocktailCall = () => {
  return fetch("https://api-cocktails.herokuapp.com/api/v1/cocktails?random=1", {
    headers: {
      Authorization: `Token token=${process.env.NEXT_PUBLIC_NEW_KEY}`
    }
  })
  .then((response) => {
    if(response.ok) {
    return response.json()
  }
  throw new Error('Something went wrong')
})
}
export const ingredientCocktailCall = (data) => {
  return Promise.all([anyIngredientCocktailCall(data), specificIngredientCocktailCall(data)])
}
const anyIngredientCocktailCall = (data) => {
  return fetch(`https://api-cocktails.herokuapp.com/api/v1/cocktails?ingredients[]=${data}`, {
    headers: {
      Authorization: `Token token=${process.env.NEXT_PUBLIC_NEW_KEY}`
    }
  }).then(response => response.json())

}

const specificIngredientCocktailCall = (data) => {
  return fetch(`https://api-cocktails.herokuapp.com/api/v1/cocktails?ingredients_only[]=${data}`, {
    headers: {
      Authorization: `Token token=${process.env.NEXT_PUBLIC_NEW_KEY}`
    }
  }).then(response => response.json())
}
