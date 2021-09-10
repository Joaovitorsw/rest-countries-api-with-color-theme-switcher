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
  FloatingLabelUI() {
    this.#inputEventListener();
  }

  #inputEventListener() {
    this.$searchInput.addEventListener("change", () => this.#hasValue());
    this.$searchInput.addEventListener(
      "input",
      this.#debounceEvent(() => {
        this.#inputCallback(this.$searchInput.value);
      }, 800)
    );
  }

  #debounceEvent(callback, timeout) {
    let timer;

    return () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        callback();
      }, timeout);
    };
  }

  #hasValue() {
    const inputValue = this.$searchInput.value;
    const hasValueInput = inputValue !== "";
    const classFn = hasValueInput
      ? this.#elementClassAdd
      : this.#elementClassRemove;
    classFn(this.$searchLabel, "active");
  }

  #elementClassAdd($element, status) {
    $element.classList.add(status);
  }

  #elementClassRemove($element, status) {
    $element.classList.remove(status);
  }
}
