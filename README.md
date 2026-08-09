# Recipe Notebook

A simple, interactive recipe book web application built with **HTML, CSS and JavaScript**.  
The project was created as a JavaScript assessment and focuses on DOM manipulation, event handling, arrays/objects, forms and interactive features.

## About the Project

Recipe Notebook allows users to explore a collection of recipes, view detailed recipe information, mark recipes as favourites, search for recipes and add their own recipes through a form.

Recipe data is stored and managed in JavaScript while the page is dynamically updated through DOM manipulation. The application is built as a front-end project without a database.

## Features

- **Home page** with navigation and an introduction to the application.
- **Recipe search** to find recipes from the recipe collection using any word contained in the title.
- **Recipe cards** dinamically creates and displays details from a JAvaScript object:
  - Recipe name
  - Image
  - Cooking time
  - Difficulty
  - Favourite button
- **Recipe details** displayed when a recipe is selected, it will show three differents tabs activated by click events The tabs are a resume of the recipe ingredients list with checkboxes and step-by-step cooking instructions.
- **Favourite recipes** section will display the recipes selected by the user clicking the heart button.
- **Add your own recipe** using a form.
- Responsive page structure using HTML and CSS.

## Technologies Used

- **HTML5** – page structure and forms.
- **CSS3** – layout, styling and responsive design.
- **JavaScript (ES6)** – application logic and DOM manipulation.
- **Google Fonts** – custom typography.
- **Local image assets** – recipe and interface images.

## Getting Started

### Requirements

No special software or dependencies are required.

- Web browser such as Chrome, Firefox, Safari or Edge.
- The project files downloaded or cloned from GitHub

### Running the Project

1. Download or clone the repository.
2. Open the project folder.
3. Open `html/index.html` in your browser.

Alternatively, use a local development server such as the **Live Server** extension in VS Code.

## How to Use

### Explore Recipes

From the home page, select **Explore recipes** or use the **Recipes** navigation link to go to all the recipe pool contained in the application.

Recipe cards are generated dynamically with JavaScript. Selecting a card opens the recipe details. Theres a return button that allows the user to go back to the recipes page list.

### View Recipe Details

The recipe details page opens when user click a recipe container card, provides three tabs:

1. **What am I cooking today?** – recipe description and image.
2. **What I need?** – ingredients with checkboxes.
3. **How to do it?** – cooking instructions.

### Add Favourites

Click the heart button on a recipe card to add or remove the recipe from your favourites.

The favourites section is updated dynamically using JavaScript. If no recipe selected the page will display a message.

### Add Your Own Recipe

The **Add New Recipe** functionality allows the user to enter:

- Recipe name
- Cooking time
- Difficulty
- Image
- Recipe description
- Ingredients
- Instructions

The form is handled with JavaScript and the default form submission is prevented so the recipe can be added to the current application dynamically.

> **Note:** User-created recipes are stored only in the current browser session/application state. There is currently no database or persistent storage so the new recipe will be removed when the page is reloaded.

## Project Structure

```
RecipeApp/
│
├── html/
│   ├── index.html
│   └── recipe_list.html
│
├── images/
│   ├── back_photo.png
│   ├── bolitas.png
│   ├── carrot_cake.png
│   ├── cookies.png
│   ├── create.png
│   └── recipe_logo.png
│
├── script.js
├── style.css
└── README.md
```

## JavaScript Functionality

The main application logic is contained in `script.js`.

Key functionality includes:

- Rendering recipes from JavaScript objects and creating recipe cards dynamically.
- Searching recipes by any word contained in the name of the recipe.
- Opening individual recipe details and switching between three different tabs.
- Adding and removing favourites and rendering the favorites list in a special "my favorite" section.
- Handling the add-recipe form to add the new recipe to the existent JavaScript object and dinamically create a card and a recipe details popUp tabs for it.
- Updating the page dynamically through DOM manipulation

The initial recipe collection includes:

- Carrot Cake
- Brownie Protein Bites
- Chocolate Chip Cookies

## Design

The application uses a recipe-notebook inspired visual style with custom fonts, recipe images and a simple navigation system.

The styling is contained in `style.css`, while images used by the application are stored in the `images` directory.

## Assessment Goals

This project demonstrates practical use of JavaScript concepts including:

- Variables and data types.
- Arrays and objects.
- Functions.
- Array methods such as `find`, `filter`, `forEach` and `push`.
- DOM selection and manipulation.
- Creating HTML elements dynamically.
- Event listeners.
- Form handling.
- Conditional logic.
- Working with user input.

## Known Limitations

- There is no backend or database.The project currently uses local/static recipe data.
- Recipes added by the user are not permanently saved.
- Favourites are not persisted after the page/application state is reset.
- Image uploads use temporary URLs rather than permanent storage.

## Future Improvements

Possible improvements for future versions include:

- Save recipes and favourites using Local Storage.
- Add user accounts and authentication.
- Connect the application to a backend/database.
- Add recipe categories (breakfast, lunch, dinner, snacks) and filtering.
- Add recipe ratings and user reviews.
- Add cooking timers.
- Allow users to edit and delete their own recipes.
- Add recipe sharing functionality.

## Credits

Created as a JavaScript assessment project.

Recipe Notebook © 2024
