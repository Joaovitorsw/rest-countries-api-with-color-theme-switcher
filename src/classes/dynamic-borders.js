export class DynamicBorders {
  #countriesBorders;
  constructor(countriesBorders) {
    this.#countriesBorders = countriesBorders;
  }
  dynamicBordersUI() {
    return this.createContent();
  }
  async createContent() {
    const $divBorders = document.createElement("div");
    const title = document.createElement("h2");
    const $countryPageBorders = await this.createBordersCountries();

    $divBorders.classList.add("country-page-shortcuts");
    title.innerText = "Border Countries:";
    $divBorders.appendChild(title);
    $divBorders.appendChild($countryPageBorders);

    return $divBorders;
  }
  async createBordersCountries() {
    const $countryPageBorders = document.createElement("ul");
    const countryBorders = this.#countriesBorders;

    $countryPageBorders.classList.add("country-page-borders");

    countryBorders.forEach(async (country) => {
      const $countryPage = await this.borderCountry(country);
      $countryPageBorders.append($countryPage);
    });

    return $countryPageBorders;
  }
}
