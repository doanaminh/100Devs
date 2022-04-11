//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM


document.querySelector('.getCocktail').addEventListener('click', _ => {
  const listOfDrinks = [];
  const drink = document.querySelector('input').value.toLowerCase();
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`;

  fetch (url)
  .then (result => result.json())
  .then (data => {
    console.log(data);
    const drinkArray = data.drinks;
    const currentDrink = drinkArray[Math.round(Math.random() * drinkArray.length)];
    document.querySelector('h2').innerText = currentDrink.strDrink;
    document.querySelector('img').src = currentDrink.strDrinkThumb;
    document.querySelector('h3').innerText = currentDrink.strInstructions;
    document.querySelector('h4').innerText = currentDrink.strAlcoholic;
    document.querySelector('.glass').innerText += ` ${currentDrink.strGlass}`;

    console.log(currentDrink);

    let ingredientsList = [];
    for (let key in currentDrink) {
      if (key.includes('strIngredient') && currentDrink[key]) {
        ingredientsList.push(currentDrink[key]);
      }
    };
    console.log(ingredientsList);

    ingredientsList.forEach(item => {
      document.querySelector('ul').innerHTML += `<li>${item}</li>`;
    });

  })
  .catch (error => error);

})