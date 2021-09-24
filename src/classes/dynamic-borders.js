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
  async borderCountry(borderCountry) {
    const requestName = await fetch(`https://restcountries.com/v3/alpha/${borderCountry}`);
    const data = await requestName.json();
    const countryBorder = data[0];
    const $countryPage = document.createElement("a");
    const patternRemoveParentheses = / *\([^)]*\) */g;
    $countryPage.setAttribute("href", `/#countrypage/${borderCountry}`);
    $countryPage.classList.add("country-borders");
    $countryPage.innerHTML = `<li>${countryBorder.name.official.replace(patternRemoveParentheses, "")}</li>`;

    return $countryPage;
  }
}
