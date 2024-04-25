import * as model from "./model.js";
import recipeView from "./views/recipeView.js";
import searchView from "./views/searchView.js";
import resultsView from "./views/resultsView.js";
import bookmarksView from "./views/bookmarksView.js";
import paginationView from "./views/paginationView.js";
import addRecipeView from "./views/addRecipeView.js";

import "core-js/stable";
import "regenerator-runtime/runtime";

if (model.hot) {
  model.hot.accept();
}

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpiner();

    //Update
    resultsView.update(model.getSearchresultsPage());
    bookmarksView.render(model.state.bookmarks);
    //Loading Recipe
    await model.loadRecipe(id);

    // Rendering Recipe
    recipeView.render(model.state.recipe);
    ///////////////////////////////
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchresults = async function () {
  try {
    resultsView.renderSpiner();

    //Get search query
    const query = searchView.getQuery();
    if (!query) return;

    // Load search results
    await model.loadSearchResults(query);

    //Render results
    resultsView.render(model.getSearchresultsPage());
    //Render Pagination
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (goTopage) {
  resultsView.render(model.getSearchresultsPage(goTopage));

  //Render Pagination
  paginationView.render(model.state.search);
};

const controlServing = function (newServings) {
  //update the recipe servings
  model.updateServings(newServings);
  //update the recipe view
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.removeBookmark(model.state.recipe.id);

  recipeView.update(model.state.recipe);

  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newrecipe) {
  try {
    addRecipeView.renderSpiner();

    await model.uploadRecipe(newrecipe);

    recipeView.render(model.state.recipe);

    addRecipeView.renderMessage();

    bookmarksView.render(model.state.bookmarks);

    window.history.pushState(null, "", `#${model.state.recipe.id}`);

    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, 2500);
  } catch (err) {
    addRecipeView.renderError(err.message);
  }
};

const init = function () {
  bookmarksView.addHendlerRender(controlBookmarks);
  recipeView.addHendlerRender(controlRecipes);
  recipeView.addHendlerUpdateServings(controlServing);
  recipeView.addHendlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchresults);
  paginationView.addHendlerClick(controlPagination);
  addRecipeView.addHendlerUpload(controlAddRecipe);
};

init();
