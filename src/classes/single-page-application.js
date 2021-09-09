import { ROUTES } from "../classes/routes.js";
import { $main } from "../script.js";

export class SinglePageApplication {
  static addHashListener() {
    window.addEventListener("hashchange", SinglePageApplication.renderPage);
  }
  static addWindowLoadListener() {
    window.addEventListener("load", async () => {
      await SinglePageApplication.renderPage();
      SinglePageApplication.addHashListener();
    });
  }
}
