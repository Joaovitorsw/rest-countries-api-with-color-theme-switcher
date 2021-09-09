import { $header } from "../script.js";

export class DarkModeUI {
  static headerListener() {
    const headerContent = $header.querySelector(".header-dark-mode-icon");
    headerContent.addEventListener("click", DarkModeUI.darkMode);
  }
}
