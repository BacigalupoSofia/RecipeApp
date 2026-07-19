console.log("Java script working");

// NAV BUTTONS

let fav_nav = document.getElementById("fav-btn");
let recipes_nav = document.getElementById("recipes-btn");
let home_nav = document.getElementById("home-btn");

let fav_page = document.querySelector(".favorite-recipes");

home_nav.addEventListener("click", function () {
  window.location.href = "index.html";
});

fav_nav.addEventListener("click", function () {
  fav_page.classList.add("active");
  recipes_grid.classList.add("hidden");
  pop_up.classList.add("hidden");
  renderFavorites();
  resetSearch();
});

recipes_nav.addEventListener("click", function () {
  fav_page.classList.remove("active");
  recipes_grid.classList.remove("hidden");
  pop_up.classList.add("hidden");
  updateFavoriteButtons();
  resetSearch();
});

// INDEX HTML

let main_buttons = document.querySelector(".button-container");

if (main_buttons) {
  let exploreButton = document.querySelector(".explore.button");
  let addButton = document.querySelector(".add.button");
  let favoritesButton = document.querySelector(".fav-btn");

  function navigate(route) {
    window.location.href = route;
  }

  exploreButton.addEventListener("click", () => navigate("recipe_list.html"));
  addButton.addEventListener("click", () => navigate("add_recipe.html"));
  favoritesButton.addEventListener("click", () => navigate("favorites.html"));
}
//BUTTONS NO TENGO ADD NI FAVORITOS

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

let my_favorites = [];

function toggleFavorite(button, id) {
  button.classList.toggle("active");
  const selectedRecipe = recipes.find((recipe) => recipe.id == id);

  if (button.classList.contains("active")) {
    my_favorites.push(selectedRecipe);
  } else {
    my_favorites = my_favorites.filter((recipe) => recipe.id != id);
  }

  renderFavorites();

  console.log("Favorites:", my_favorites);
}

// CREATING THE CARDS FOR RECIPES FROM OBJECT, ID STORE IN Article WHEN CARD IS CREATED (READABLE WITH DATASET).
// Use renderRecipe to update the recipe card list for retrieving the cards created by createCard and append them.

let container_card = document.getElementById("recipes-container");

let card_buttons = document.querySelectorAll(".recipe-card");
let recipe_title = document.getElementById("recipe-name");

let recipes_grid = document.querySelector(".recipes-grid");
let pop_up = document.querySelector(".pop-up-page");

function createCard(recipe) {
  const card = document.createElement("article");
  card.classList.add("recipe-card");

  card.dataset.id = recipe.id;

  const recipe_name = document.createElement("h3");
  recipe_name.classList.add("recipe-name");
  recipe_name.innerText = recipe.name;

  const recipe_img = document.createElement("img");
  recipe_img.classList.add("recipe-img");
  recipe_img.src = recipe.img;

  const recipe_difficulty = document.createElement("p");
  recipe_difficulty.classList.add("recipe-difficulty");
  recipe_difficulty.innerText = recipe.difficulty;

  const recipe_time = document.createElement("p");
  recipe_time.classList.add("recipe-time");
  recipe_time.innerText = recipe.time;

  const favorite_button = document.createElement("button");
  favorite_button.innerText = "♡";
  favorite_button.classList.add("favorite-btn");
  favorite_button.dataset.id = recipe.id;

  favorite_button.addEventListener("click", (event) => {
    event.stopPropagation();

    toggleFavorite(favorite_button, recipe.id);
  });

  card.append(
    recipe_name,
    recipe_img,
    recipe_difficulty,
    recipe_time,
    favorite_button,
  );

  card.addEventListener("click", () => {
    console.log(`Recipe card clicked ${card.dataset.id}`);
    showRecipe(recipe);
  });

  return card;
}

function renderRecipes() {
  container_card.innerHTML = "";

  recipes.forEach((recipe) => {
    const card = createCard(recipe);
    container_card.appendChild(card);
  });

  updateFavoriteButtons();
}

if (container_card) {
  renderRecipes();
  /* recipes.forEach((recipe) => {
    const card = createCard(recipe);
    container_card.appendChild(card); */
  updateFavoriteButtons();

  /* const card_button = document.createElement("button");
    card_button.classList.add("recipe-card");
    card_button.dataset.id = recipe.id;
    console.log(card_button.dataset.id);
    container_card.appendChild(card_button);

    let recipe_name = document.createElement("h3");
    recipe_name.classList.add("recipe-name");
    recipe_name.innerText = recipe.name;
    card_button.appendChild(recipe_name);

    let recipe_img = document.createElement("img");
    recipe_img.classList.add("recipe-img");
    recipe_img.src = recipe.img;
    card_button.appendChild(recipe_img);

    let recipe_difficulty = document.createElement("p");
    recipe_difficulty.classList.add("recipe-difficulty");
    recipe_difficulty.innerText = recipe.difficulty;
    card_button.appendChild(recipe_difficulty);

    let recipe_time = document.createElement("p");
    recipe_time.classList.add("recipe-time");
    recipe_time.innerText = recipe.time;
    card_button.appendChild(recipe_time);

    let favorite_button = document.createElement("button");
    favorite_button.innerText = "♡";
    favorite_button.classList.add("favorite-btn");
    favorite_button.dataset.id = recipe.id;
    card_button.appendChild(favorite_button);

    favorite_button.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleFavorite(favorite_button, card_button.dataset.id);
    });

    updateFavoriteButtons();

    /*favorite_button.addEventListener("click", () => {
       console.log("Heart clicked");
      favorite_button.classList.toggle("active");
      event.stopPropagation();
      const id = card_button.dataset.id;

      const selectedRecipe = recipes.find((recipe) => recipe.id == id);

      if (favorite_button.classList.contains("active")) {
        my_favorites.push(selectedRecipe);
      } else {
        my_favorites = my_favorites.filter((recipe) => recipe.id != id);
      }
      renderFavorites();

      console.log("Favorites:", my_favorites);
    }); */
}

// POPUP - ADDING CLICK EVENT, WHEN RECIPE IS SELECTED WILL GO TO THE SPECIFIC INFORMATION ABOUT IT.

/* let card_buttons = document.querySelectorAll(".recipe-card");
let recipe_title = document.getElementById("recipe-name");

let recipes_grid = document.querySelector(".recipes-grid");
let pop_up = document.querySelector(".pop-up-page"); */

function showRecipe(recipe) {
  recipe_title.innerText = recipe.name;
  document.getElementById("recipe-details").innerText = recipe.resume;
  document.getElementById("recipe-image").src = recipe.img;

  let ingredients = document.getElementById("ingredients-list");
  ingredients.innerHTML = "";
  ingredientsList = recipe.ingredients;
  console.log(ingredients);

  for (let i = 0; i < ingredientsList.length; i++) {
    const li = document.createElement("li");
    li.classList.add("list-of-ingredients");

    const check_box = document.createElement("input");
    check_box.classList.add("check-box");
    check_box.type = "checkbox";
    check_box.id = `ingredient-${i}`;

    const labels = document.createElement("label");
    labels.setAttribute("for", check_box.id);
    labels.textContent = ingredientsList[i];

    li.appendChild(check_box);
    li.appendChild(labels);

    ingredients.appendChild(li);

    //const li = document.createElement("li");
    // li.textContent = ingredientsList[i];
    //console.log(li);
    //ingredients.appendChild(li);
  }

  let steps = document.getElementById("steps");
  steps.innerHTML = "";
  stepByStep = recipe.instructions;

  for (let i = 0; i < stepByStep.length; i++) {
    const li = document.createElement("li");
    li.textContent = stepByStep[i];
    steps.appendChild(li);
  }

  recipes_grid.classList.add("hidden");
  fav_page.classList.remove("active");
  pop_up.classList.remove("hidden");
  search_form.classList.add("hidden");

  let return_button = document.createElement("button");
  return_button.classList.add("return-button");
  return_button.classList.add("active");
  return_button.innerText = "Return";
  pop_up.appendChild(return_button);

  return_button.addEventListener("click", function () {
    console.log("RETURN CLICKED");
    recipes_grid.classList.remove("hidden");
    pop_up.classList.add("hidden");
    return_button.classList.remove("active");
    search_form.classList.remove("hidden");
    resetSearch();
  });
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

// FAV LIST

let favorites = document.querySelector(".favorite-recipes");

function renderFavorites() {
  favorites.innerHTML = "";

  my_favorites.forEach((recipe) => {
    const card = createCard(recipe);

    favorites.appendChild(card);
  });

  updateFavoriteButtons();
}

/* function renderFavorites() {
  favorites.innerHTML = "";

  my_favorites.forEach((recipe) => {
    const card_button = document.createElement("button");
    card_button.classList.add("recipe-card");
    card_button.dataset.id = recipe.id;
    console.log(card_button.dataset.id);
    favorites.appendChild(card_button);

    let recipe_name = document.createElement("h3");
    recipe_name.classList.add("recipe-name");
    recipe_name.innerText = recipe.name;
    card_button.appendChild(recipe_name);

    let recipe_img = document.createElement("img");
    recipe_img.classList.add("recipe-img");
    recipe_img.src = recipe.img;
    card_button.appendChild(recipe_img);

    let recipe_difficulty = document.createElement("p");
    recipe_difficulty.classList.add("recipe-difficulty");
    recipe_difficulty.innerText = recipe.difficulty;
    card_button.appendChild(recipe_difficulty);

    let recipe_time = document.createElement("p");
    recipe_time.classList.add("recipe-time");
    recipe_time.innerText = recipe.time;
    card_button.appendChild(recipe_time);

    let favorite_button = document.createElement("button");
    favorite_button.innerText = "♡";
    favorite_button.classList.add("favorite-btn");
    favorite_button.dataset.id = recipe.id;
    favorite_button.classList.add("active");
    card_button.appendChild(favorite_button);

    favorite_button.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleFavorite(favorite_button, card_button.dataset.id);
      updateFavoriteButtons();
    });

    /* favorite_button.addEventListener("click", (event) => {
      favorite_button.classList.toggle("active");
      event.stopPropagation();
      const id = card_button.dataset.id;

      const selectedRecipe = recipes.find((recipe) => recipe.id == id);

      if (!favorite_button.classList.contains("active")) {
        my_favorites = my_favorites.filter((recipe) => recipe.id != id);
      }

      renderFavorites();

      console.log("Favorites:", my_favorites);
    }); 
  });
}
*/

function updateFavoriteButtons() {
  const buttons = document.querySelectorAll(".favorite-btn");
  buttons.forEach((button) => {
    console.log(`heart button: ${button}`);
    const id = button.dataset.id;
    console.log(`heart button id: ${id}`);
    if (my_favorites.some((recipe) => recipe.id == id)) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}

// TO ADD YOUR OWN RECIPE

let list_page = document.querySelector(".recipe-list-page");
let form = document.querySelector(".add-form");
let close_button = document.querySelector(".close-btn");
let add_recipe = document.querySelector("add-recipe-btn");
let form_info = document.getElementById("recipe-form");

let addBtn = document.createElement("button");
addBtn.innerText = "Add New Recipe";
addBtn.classList.add("add-btn");
list_page.appendChild(addBtn);

if (list_page) {
  addBtn.addEventListener("click", function () {
    console.log("add button clicked");
    form.classList.add("active");
    addBtn.style.display = "none";
  });

  close_button.addEventListener("click", function () {
    form.classList.remove("active");
    addBtn.style.display = "block";
  });
}

// PROCESSING MY FORM AVOIDING default behaviour

form_info.addEventListener("submit", (event) => {
  event.preventDefault();

  const recipe = {
    id: recipes.length,
    name: document.querySelector("#name").value,
    time: document.querySelector("#time").value,
    difficulty: document.querySelector('input[name="difficulty"]:checked')
      ?.value,
    img: "",
    resume: document.querySelector("#resume").value,
    ingredients: [],
    instructions: [],
  };

  console.log("form submited");
  console.log(recipe);
  form.classList.remove("active");
  addBtn.style.display = "block";

  recipes.push(recipe);
  renderRecipes();
});

// searching bar

let search_form = document.querySelector(".search-form");
let search_input = document.querySelector(".search-input");
let search_button = document.querySelector(".search-button");

function searching() {
  let user_search = search_input.value.trim().toLowerCase();
  if (search_input.value.trim() === "") {
    alert("Write the name of the recipe to search");
    resetSearch();
  }
  search_input.value = "";
  return user_search;
}

function comparing() {
  const user_search = searching();
  if (!user_search) return;

  recipe_cards = document.querySelectorAll(".recipe-card");
  recipe_cards.forEach((card) => {
    const recipe_name = card
      .querySelector(".recipe-name")
      .textContent.toLowerCase();
    !recipe_name.includes(user_search)
      ? card.classList.add("hidden")
      : card.classList.remove("hidden");
  });
}

function resetSearch() {
  const recipe_cards = document.querySelectorAll(".recipe-card");

  recipe_cards.forEach((card) => {
    card.classList.remove("hidden");
  });

  search_input.value = "";
}

search_form.addEventListener("submit", (event) => {
  event.preventDefault();
  comparing();
});

// Ingredient list with checkbox
