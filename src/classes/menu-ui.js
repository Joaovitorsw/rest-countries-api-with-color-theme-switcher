export class MenuUI {
  #$root;
  #$selectBox;
  #$selectItem;
  #$optionsContainer;
  #$menuList;
  #filterCallback;

  constructor($element, filterCallback) {
    this.#$root = document.querySelector(`${$element}`);
    this.$countries = this.#$root.querySelector(".countries");
    this.#$selectBox = this.#$root.querySelector(".select-box");
    this.#$selectItem = this.#$selectBox.querySelector(".selected");
    this.#$menuList = this.#$selectBox.querySelectorAll(".option");
    this.#$optionsContainer =
      this.#$selectBox.querySelector(".options-container");
    this.#filterCallback = filterCallback;
  }
}
