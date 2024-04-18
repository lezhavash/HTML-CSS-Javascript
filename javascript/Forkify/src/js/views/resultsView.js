import icons from "../../img/icons.svg";
import View from "./view";
class ResultsView extends View {
  _perentElement = document.querySelector(".results");
  _errorMessage = `No Recipes Found for You`;
  _message = ``;

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join(" ");
  }

  _generateMarkupPreview(results) {
    return `
  <li class="preview">
    <a class="preview__link" href="#${results.id}">
      <figure class="preview__fig">
        <img src="${results.image}" alt="${results.title}" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${results.title}</h4>
        <p class="preview__publisher">${results.publisher}</p>
      </div>
    </a>
  </li>
`;
  }
}

export default new ResultsView();

//preview__link--active

/* <div class="preview__user-generated">
          <svg>
            <use href="${icons}#icon-user"></use>
          </svg>
</div> */
