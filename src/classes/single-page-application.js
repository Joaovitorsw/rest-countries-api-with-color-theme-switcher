import { ROUTES } from "../classes/routes.js";
import { $main } from "../script.js";

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
  static addWindowLoadListener() {
    window.addEventListener("load", async () => {
      await SinglePageApplication.renderPage();
      SinglePageApplication.addHashListener();
    });
  }
}
