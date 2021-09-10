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

  menuUI() {
    this.#menuContentListener();
    this.#menuAddListener();
    this.#regionCallback();
  }

  #regionCallback() {
    const regionValue = this.#$root.querySelector(".selected").innerText;
    this.#filterCallback(regionValue);
  }

  #menuContentListener() {
    this.#$selectItem.addEventListener("click", () => this.#menuShowContent());
  }

  #menuAddListener() {
    this.#$menuList.forEach(($itemMenu) => {
      $itemMenu.addEventListener("click", async () => {
        const labelValue = $itemMenu.querySelector("label").innerHTML;
        this.#$selectItem.innerHTML = labelValue;
        this.#removeClassElement(this.#$optionsContainer, "active");
        this.#regionCallback();
      });
    });
  }

  #menuShowContent() {
    this.#toggleClassElement(this.#$optionsContainer, "active");
  }

  #toggleClassElement($element, status) {
    $element.classList.toggle(status);
  }
  #removeClassElement($element, status) {
    $element.classList.remove(status);
  }
}
