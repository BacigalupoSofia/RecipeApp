console.log("Java script working");

// INDEX HTML

let exploreButton = document.querySelector(".explore.button");
let addButton = document.querySelector(".add.button");
let favoritesButton = document.querySelector(".favorites.button");

function navigate(route) {
  window.location.href = route;
}

exploreButton.addEventListener("click", () => navigate("recipe_list.html"));
addButton.addEventListener("click", () => navigate("add_recipe.html"));
favoritesButton.addEventListener("click", () => navigate("favorites.html"));

// CREAR ADD Y FAVORITOS 