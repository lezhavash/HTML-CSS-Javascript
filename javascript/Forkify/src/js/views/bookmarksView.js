import previewView from "./previewView";
import View from "./view";
class BookMarksView extends View {
  _perentElement = document.querySelector(".bookmarks__list");
  _errorMessage = `No bookmarks yet. Find a nice recipe and bookmark it :)`;
  _message = ``;

  addHendlerRender(hendler) {
    window.addEventListener("load", hendler);
  }

  _generateMarkup() {
    return this._data
      .map((bookmarks) => previewView.render(bookmarks, false))
      .join(" ");
  }
}

export default new BookMarksView();
