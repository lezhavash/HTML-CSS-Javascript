import previewView from "./previewView";
import View from "./view";
class ResultsView extends View {
  _perentElement = document.querySelector(".results");
  _errorMessage = `No Recipes Found for You`;
  _message = ``;

  _generateMarkup() {
    return this._data
      .map((results) => previewView.render(results, false))
      .join(" ");
  }
}

export default new ResultsView();

//preview__link--active

/* <div class="preview__user-generated">
          <svg>
            <use href="${icons}#icon-user"></use>
          </svg>
</div> */
