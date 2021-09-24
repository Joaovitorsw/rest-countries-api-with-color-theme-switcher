import { CountryPageUI } from "./country-page-ui.js";
import { Utils } from "./utils.js";

export class DynamicBorders {
  #countriesBorders;
  constructor(countriesBorders) {
    this.#countriesBorders = countriesBorders;
  }
  dynamicBordersUI() {
    return this.createContent();
  }
  async createContent() {
    const $divBorders = Utils.createElementWithClass("div", "country-page-shortcuts");
    const title = document.createElement("h2");
    const $countryPageBorders = await this.createBordersCountries();

    title.innerText = "Border Countries:";
    $divBorders.appendChild(title);
    $divBorders.appendChild($countryPageBorders);

    return $divBorders;
  }
  async createBordersCountries() {
    const $countryPageBorders = Utils.createElementWithClass("ul", "country-page-borders");
    const countryBorders = this.#countriesBorders;

    countryBorders.forEach(async (country) => {
      const $countryPage = await this.borderCountry(country);
      $countryPageBorders.append($countryPage);
    });

    return $countryPageBorders;
  }
  async borderCountry(borderCountry) {
    const countryBorder = await CountryPageUI.getCountry(borderCountry);
    const { name } = countryBorder;
    const { common } = name;
    const $countryPage = Utils.createElementWithClass("a", "country-borders");
    const patternRemoveParentheses = / *\([^)]*\) */g;
    $countryPage.setAttribute("href", `/#countrypage/${borderCountry}`);
    $countryPage.innerHTML = `<li>${common.replace(patternRemoveParentheses, "")}</li>`;

    return $countryPage;
  }
}
