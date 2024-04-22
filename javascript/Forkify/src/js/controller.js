import * as model from "./model.js";
import recipeView from "./views/recipeView.js";
import searchView from "./views/searchView.js";
import resultsView from "./views/resultsView.js";
import paginationView from "./views/paginationView.js";

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
  recipeView.render(model.state.recipe);
};

const init = function () {
  recipeView.addHendlerRender(controlRecipes);
  recipeView.addHendlerUpdateServings(controlServing);
  searchView.addHandlerSearch(controlSearchresults);
  paginationView.addHendlerClick(controlPagination);
};

init();
