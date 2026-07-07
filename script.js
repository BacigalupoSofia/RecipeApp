console.log("Java script working");

// INDEX HTML

let exploreButton = document.querySelector(".explore.button");
let addButton = document.querySelector(".add.button");
let favoritesButton = document.querySelector(".favorites.button");

function navigate(route) {
  window.location.href = route;
}

//exploreButton.addEventListener("click", () => navigate("recipe_list.html"));
//addButton.addEventListener("click", () => navigate("add_recipe.html"));
//favoritesButton.addEventListener("click", () => navigate("favorites.html"));

// CREAR ADD Y FAVORITOS

// RECIPE OBJECT

let recipes = [
  {
    id: 1,
    name: "Carrot Cake",
    time: "20 min",
    difficulty: "Easy",
    img: "../images/carrot_cake.png",
    resume:
      "A spiced, incredibly moist layer cake flavored with grated carrots and usually topped with rich cream cheese frosting. Historically originating from medieval European carrot puddings, it became a beloved modern dessert packed with warm spices like cinnamon, toasted nuts, and sometimes pineapple or coconut",
    ingredients: ["Flour", "Flax seeds", "sugar"],
    instructions: [
      "Preheat oven",
      "Mix dry ingredients",
      "Combine wet ingredients",
      "Bake and frost",
    ],
  },
  {
    id: 2,
    name: "Brownie Protein Bites",
    time: "10 min",
    difficulty: "Easy",
    img: "../images/bolitas.png",
    resume:
      "A spiced, incredibly moist layer cake flavored with grated carrots and usually topped with rich cream cheese frosting. Historically originating from medieval European carrot puddings, it became a beloved modern dessert packed with warm spices like cinnamon, toasted nuts, and sometimes pineapple or coconut",
    ingredients: ["Flour", "Flax seeds", "sugar"],
    instructions: [
      "Preheat oven",
      "Mix dry ingredients",
      "Combine wet ingredients",
      "Bake and frost",
    ],
  },
  {
    id: 3,
    name: "Chocolate Chips Cookies",
    time: "15 min",
    difficulty: "Medium",
    img: "../images/cookies.png",
    resume:
      "A spiced, incredibly moist layer cake flavored with grated carrots and usually topped with rich cream cheese frosting. Historically originating from medieval European carrot puddings, it became a beloved modern dessert packed with warm spices like cinnamon, toasted nuts, and sometimes pineapple or coconut",
    ingredients: ["Flour", "Flax seeds", "sugar"],
    instructions: [
      "Preheat oven",
      "Mix dry ingredients",
      "Combine wet ingredients",
      "Bake and frost",
    ],
  },
];

// CREATING THE CARDS FOR RECIPES

let container_card = document.getElementById("recipes-container");

recipes.forEach((recipe) => {
  container_card.innerHTML += `
    <button class="container button">
      <article class="recipe-card">
        <img src="${recipe.img}" alt="${recipe.name}">
        <h3>${recipe.name}</h3>
        <p>${recipe.difficulty}</p>
        <p>${recipe.time}</p>
      </article>
    </button>
  `;
});

console.log();
