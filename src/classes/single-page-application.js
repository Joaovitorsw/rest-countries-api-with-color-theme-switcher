import { ROUTES } from "../classes/routes.js";
import { FloatingLabelUI } from "../classes/floating-label-ui.js";
import { MenuUI } from "../classes/menu-ui.js";
import { $main } from "../script.js";
import { CountriesUI } from "./countries-ui.js";

export class SinglePageApplication {
  static addHashListener() {
    window.addEventListener("hashchange", SinglePageApplication.renderPage);
  }
  static getTargetRoute(hash) {
    const hashIsEmpty = hash === "";
    return hashIsEmpty ? "home" : hash.replace("#", "");
  }
  static async renderPage() {
    const hashedRoute = window.location.hash;
    const targetRoute = SinglePageApplication.getTargetRoute(hashedRoute);

    const [fragment, param] = targetRoute.split("/");
    const renderPageFn = ROUTES[fragment];

    const hasParam = !!param;
    const html = hasParam ? await renderPageFn(param) : await renderPageFn();

    $main.innerHTML = "";
    $main.appendChild(html);

    if (hashedRoute === "") return SinglePageApplication.setupHome();
  }
  static setupHome() {
    const countries = new CountriesUI(".countries");
    const filterByRegion = new MenuUI("#root", (region) =>
      countries.selectedCallback(region)
    );
    const searchBar = new FloatingLabelUI(".homepage", async (text) =>
      countries.inputCallback(text)
    );
    searchBar.FloatingLabelUI();
    filterByRegion.menuUI();
  }
  static addWindowLoadListener() {
    window.addEventListener("load", async () => {
      await SinglePageApplication.renderPage();
      SinglePageApplication.addHashListener();
    });
  }
}
