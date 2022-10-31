export const randomCocktailCall = () => {

  return fetch(`www.thecocktaildb.com/api/json/v1/${process.env.NEXT_PUBLIC_API_KEY}/random.php`)
 			.then((response) => response.json())
}
