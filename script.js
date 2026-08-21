// NAV BUTTONS

let fav_nav = document.getElementById("fav-btn");
let recipes_nav = document.getElementById("recipes-btn");
let home_nav = document.getElementById("home-btn");

let fav_page = document.querySelector(".favorite-recipes");

home_nav.addEventListener("click", function () {
  window.location.href = "index.html";
});

fav_nav.addEventListener("click", function () {
  event.preventDefault();
  fav_page.classList.add("active");
  recipes_grid.classList.add("hidden");
  pop_up.classList.add("hidden");
  renderFavorites();
  resetSearch();
});

recipes_nav.addEventListener("click", function () {
  event.preventDefault();
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

  exploreButton.addEventListener("click", () => {
    navigate("html/recipe_list.html");
  });

  addButton.addEventListener("click", () => {
    navigate("html/recipe_list.html");
  });

  favoritesButton.addEventListener("click", () => {
    navigate("html/recipe_list.html");
  });
}

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
    ingredients: [
      "2 cups (250 g) all-purpose flour",
      "2 teaspoons baking powder",
      "1 teaspoon baking soda",
      "1/2 teaspoon salt",
      "2 teaspoons ground cinnamon",
      "1/2 teaspoon ground nutmeg",
      "3 large eggs",
      "1 cup (200 g) granulated sugar",
      "1/2 cup (100 g) brown sugar",
      "1 cup (240 ml) vegetable oil",
      "2 teaspoons vanilla extract",
      "3 cups (330 g) grated carrots",
      "1/2 cup (60 g) chopped walnuts or pecans (optional)",
      "1/2 cup (75 g) raisins (optional)",
    ],
    instructions: [
      "Preheat the oven to 350°F (175°C) and grease two 8-inch round cake pans.",
      "In a large bowl, whisk together the flour, baking powder, baking soda, salt, cinnamon, and nutmeg.",
      "In another bowl, beat the eggs, granulated sugar, brown sugar, oil, and vanilla until smooth.",
      "Gradually fold the dry ingredients into the wet ingredients until just combined.",
      "Stir in the grated carrots, followed by the walnuts and raisins if using.",
      "Divide the batter evenly between the prepared cake pans.",
      "Bake for 30–35 minutes, or until a toothpick inserted into the center comes out clean.",
      "Allow the cakes to cool completely before frosting with cream cheese frosting and serving.",
    ],
  },
  {
    id: 1,
    name: "Brownie Protein Bites",
    time: "10 min",
    difficulty: "Easy",
    img: "../images/bolitas.png",
    resume:
      "Rich, chocolatey, and irresistibly fudgy, these brownies have a crackly top with a soft, dense center. Every bite is packed with deep cocoa flavor and just the right amount of sweetness, making them perfect for sharing or enjoying with a glass of milk or a scoop of vanilla ice cream. A timeless recipe that's simple to make and always a crowd-pleaser.",
    ingredients: [
      "1/2 cup (115 g) unsalted butter, melted",
      "1 cup (200 g) granulated sugar",
      "2 large eggs",
      "1 teaspoon vanilla extract",
      "1/3 cup (40 g) unsweetened cocoa powder",
      "1/2 cup (65 g) all-purpose flour",
      "1/4 teaspoon salt",
      "1/4 teaspoon baking powder",
      "1/2 cup (85 g) chocolate chips (optional)",
      "1/2 cup (60 g) chopped walnuts or pecans (optional)",
    ],
    instructions: [
      "Preheat the oven to 350°F (175°C) and grease or line an 8×8-inch baking pan with parchment paper.",
      "Melt the butter and whisk it together with the sugar until well combined.",
      "Add the eggs one at a time, then stir in the vanilla extract.",
      "Sift in the cocoa powder, flour, salt, and baking powder, then mix until just combined.",
      "Fold in the chocolate chips and chopped nuts, if using.",
      "Pour the batter into the prepared baking pan and spread it evenly.",
      "Bake for 20–25 minutes, or until a toothpick inserted near the center comes out with a few moist crumbs.",
      "Allow the brownies to cool completely in the pan before slicing into squares and serving.",
    ],
  },
  {
    id: 2,
    name: "Chocolate Chips Cookies",
    time: "15 min",
    difficulty: "Medium",
    img: "../images/cookies.png",
    resume:
      "Soft in the center, lightly crisp around the edges, and filled with melty chocolate chips, these classic chocolate chip cookies are a timeless favorite. Easy to make and perfect for any occasion, they're delicious served warm from the oven with a glass of milk.",
    ingredients: [
      "2 1/4 cups (280 g) all-purpose flour",
      "1 teaspoon baking soda",
      "1/2 teaspoon salt",
      "1 cup (225 g) unsalted butter, softened",
      "3/4 cup (150 g) granulated sugar",
      "3/4 cup (165 g) packed brown sugar",
      "1 teaspoon vanilla extract",
      "2 large eggs",
      "2 cups (340 g) semi-sweet chocolate chips",
      "1 cup (120 g) chopped walnuts or pecans (optional)",
    ],
    instructions: [
      "Preheat the oven to 375°F (190°C) and line baking sheets with parchment paper.",
      "Whisk together the flour, baking soda, and salt in a medium bowl.",
      "In a large bowl, cream the softened butter, granulated sugar, and brown sugar until light and fluffy.",
      "Beat in the vanilla extract and eggs, one at a time, until fully incorporated.",
      "Gradually mix the dry ingredients into the wet ingredients until just combined.",
      "Fold in the chocolate chips and chopped nuts, if using.",
      "Scoop tablespoon-sized portions of dough onto the prepared baking sheets, leaving space between each cookie.",
      "Bake for 9–11 minutes, or until the edges are golden brown and the centers are just set.",
      "Let the cookies cool on the baking sheet for 5 minutes before transferring them to a wire rack to cool completely.",
    ],
  },
];

// FAVORITES add or remove from the list of favorites when clicking the heart button, and update the list of favorites in the favorite tab. If button is active will find it by id to add it or if not active will filter it by id to remove it from the list of favorites. Then will call renderFavorites to update the list of favorites in the favorite tab.

let my_favorites = [];

function toggleFavorite(button, id) {
  const selectedRecipe = recipes.find((recipe) => recipe.id == id);

  if (button.classList.contains("active")) {
    button.classList.remove("active");
    my_favorites = my_favorites.filter((recipe) => recipe.id != id);
  } else {
    button.classList.add("active");
    my_favorites.push(selectedRecipe);
  }

  renderFavorites();
}

// FAV LIST

let favorites = document.querySelector(".favorite-recipes");

function renderFavorites() {
  favorites.innerHTML = "";

  if (my_favorites.length === 0) {
    const message = document.createElement("p");
    message.textContent = "You haven't added any favorite recipes yet.";
    favorites.appendChild(message);
    return;
  }

  my_favorites.forEach((recipe) => {
    const card = createCard(recipe);
    favorites.appendChild(card);
  });

  updateFavoriteButtons();
}

function updateFavoriteButtons() {
  const buttons = document.querySelectorAll(".favorite-btn");
  buttons.forEach((button) => {
    const id = button.dataset.id;

    if (my_favorites.some((recipe) => recipe.id == id)) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
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
  favorite_button.innerText = "♥";
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
  updateFavoriteButtons();
}

// POPUP - ADDING CLICK EVENT, WHEN RECIPE IS SELECTED WILL GO TO THE SPECIFIC INFORMATION ABOUT IT.

function showRecipe(recipe) {
  recipe_title.innerText = recipe.name;
  document.getElementById("recipe-details").innerText = recipe.resume;
  document.getElementById("recipe-image").src = recipe.img;

  let ingredients = document.getElementById("ingredients-list");
  ingredients.innerHTML = "";
  ingredientsList = recipe.ingredients;

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

  const ingredientInput = document
    .getElementById("ingredients-input")
    .value.split("\n")
    .map((item) => item.trim());

  const instructionsInput = document
    .getElementById("instructions-input")
    .value.split("\n")
    .map((item) => item.trim());

  const imageInput = document.getElementById("img").files[0];

  const name = document.querySelector("#name").value.trim();
  const time = document.querySelector("#time").value;
  const difficulty = document.querySelector(
    'input[name="difficulty"]:checked',
  )?.value;
  const resume = document.querySelector("#resume").value.trim();

  const recipe = {
    id: recipes.length,
    name: name,
    time: Number(time),
    difficulty: difficulty,
    img: imageInput ? URL.createObjectURL(imageInput) : "",
    resume: resume,
    ingredients: ingredientInput,
    instructions: instructionsInput,
  };

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
