export class Utils {
  static createElementWithClass(selector, ...className) {
    const $element = document.createElement(selector);
    $element.classList.add(...className);
    return $element;
  }
}
