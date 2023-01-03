const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const categIngredients = document.querySelector("#ingredients");

let ingredientsList = [];

 ingredients.forEach((ingredient) => {
    let item = document.createElement("li");
    item.classList.add("item")
    item.textContent = ingredient;
    ingredientsList.push(item);
})

categIngredients.append(...ingredientsList)