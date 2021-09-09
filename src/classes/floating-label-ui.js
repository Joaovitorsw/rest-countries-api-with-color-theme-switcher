export class FloatingLabelUI {
  $homePage;
  $searchInput;
  $searchLabel;
  $countries;
  #inputCallback;

  constructor($element, inputCallBack) {
    this.$homePage = document.querySelector(`${$element}`);
    this.$searchInput = this.$homePage.querySelector(".search-bar-input");
    this.$searchInputFocus = this.$searchInput.focus();
    this.$searchLabel = this.$homePage.querySelector(".search-bar-label");
    this.#inputCallback = inputCallBack;
  }
}
