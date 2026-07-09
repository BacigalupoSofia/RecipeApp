console.log("Java script working");

// INDEX HTML

let main_buttons = document.querySelector(".button-container");

if (main_buttons) {
  let exploreButton = document.querySelector(".explore.button");
  let addButton = document.querySelector(".add.button");
  let favoritesButton = document.querySelector(".favorites.button");

  function navigate(route) {
    window.location.href = route;
  }

  exploreButton.addEventListener("click", () => navigate("recipe_list.html"));
  addButton.addEventListener("click", () => navigate("add_recipe.html"));
  favoritesButton.addEventListener("click", () => navigate("favorites.html"));
}

// CREAR ADD Y FAVORITOS

// RECIPE OBJECT

let recipes = [
  {
    id: 0,
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
    id: 1,
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
    id: 2,
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

// CREATING THE CARDS FOR RECIPES FROM OBJECT, ID STORE IN BUTTON WHEN CARD IS CREATED (READABLE WITH DATASET)

let container_card = document.getElementById("recipes-container");

if (container_card) {
  recipes.forEach((recipe) => {
    container_card.innerHTML += `
      <button class="recipe-card" data-id="${recipe.id}">
        <article>
          <img src="${recipe.img}" alt="${recipe.name}">
          <h3>${recipe.name}</h3>
          <p>${recipe.difficulty}</p>
          <p>${recipe.time}</p>
        </article>
      </button>
    `;
  });
}

// ADDING CLICK EVENT, WHEN RECIPE IS SELECTED WILL GO TO THE SPECIFIC INFORMATION ABOUT IT.

let card_buttons = document.querySelectorAll(".recipe-card");

card_buttons.forEach((card) => {
  card.addEventListener("click", function () {
    let id = this.dataset.id;
    console.log("BUTTON CLICKED", id);
    window.location.href = `/html/recipe_cards.html?id=${id}`;
  });
});

// AFTER CLICK, ID IS USED TO LOOK THE RECIPE IN THE OBJECT. OPEN recipe_cards file
// URLSearchParams(window.location.search) is to search query parameter in URL

let recipe_title = document.getElementById("recipe-name");

// just executed when im in the specific recipe html file
if (recipe_title) {
  let params = new URLSearchParams(window.location.search);
  let recipe_id = params.get("id");

  let selected_recipe = recipes[recipe_id];
  console.log("ID recibido:", recipe_id);
  console.log("Receta encontrada:", recipes[recipe_id]);
  recipe_title.innerText = selected_recipe.name;

  document.getElementById("recipe-details").innerText = selected_recipe.resume;
  document.getElementById("recipe-image").src = selected_recipe.img;

  let ingredients = document.getElementById("ingredients-list");
  ingredientsList = selected_recipe.ingredients;
  console.log(ingredients);

  for (let i = 0; i < ingredientsList.length; i++) {
    const li = document.createElement("li");
    li.textContent = ingredientsList[i];
    console.log(li);
    ingredients.appendChild(li);
  }

  let steps = document.getElementById("steps");
  stepByStep = selected_recipe.instructions;

  for (let i = 0; i < stepByStep.length; i++) {
    const li = document.createElement("li");
    li.textContent = stepByStep[i];
    steps.appendChild(li);
  }
}

// SHOWING AND HIDING TABS WITH CLICK
const tabs = document.querySelectorAll(".tab");
const tabContent = document.querySelectorAll(".tab-content");

tabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    console.log("clicked");

    tabs.forEach(function (currentTab) {
      currentTab.classList.remove("active");
    });
    tabContent.forEach(function (tabContent) {
      tabContent.classList.remove("active");
    });
    tab.classList.add("active");

    const selectedTab = tab.dataset.tab;
    const selectedContent = document.getElementById(selectedTab);
    selectedContent.classList.add("active");
  });
});
