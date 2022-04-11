//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'

document.querySelector('button').addEventListener('click', _ => {
  const result = document.querySelector('input').value.toLowerCase();
  fetch (`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${result}`)
    .then(res => res.json())
    .then(data => {
      console.log(data.drinks)
      let drink = data['drinks'][Math.floor(Math.random() * data['drinks'].length)];
      document.querySelector('h2').innerText = drink.strDrink;
      document.querySelector('img').src = drink.strDrinkThumb;
      document.querySelector('h3').innerText = drink.strInstructions;
    })
    .catch(err => {
      console.log(err);
    })
})