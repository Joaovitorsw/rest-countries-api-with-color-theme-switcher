import { CountriesAPI } from "../classes/countries-api.js";

export class CountriesUI {
  $countriesContent;
  inputText;
  regionValue;

  constructor($element) {
    this.$countriesContent = document.querySelector($element);
    CountriesAPI.getCountries().then((countries) => {
      this.countriesReset();
      countries.forEach((country) => this.createCountryCard(country));
    });
    this.inputText = "";
  }

  selectedCallback(region) {
    this.regionValue = region;
    this.createRegions();
  }

  inputCallback(text) {
    this.inputText = text;
    this.createRegions();
  }

  async createRegions() {
    const hasRegion = this.regionValue !== "Filter by Region";
    const countriesFn = hasRegion ? CountriesAPI.getRegions : CountriesAPI.getCountries;
    const regions = await countriesFn(this.regionValue);
    this.countriesReset();
    regions
      .filter((regionCountries) => {
        const regionCountriesLowerCase = regionCountries.name.official.toLowerCase();
        const userText = this.inputText.toLowerCase();
        const hasCountry = regionCountriesLowerCase.indexOf(userText) > -1;
        return hasCountry ?? regionCountries;
      })
      .forEach((filteredRegionsCountries) => this.createCountryCard(filteredRegionsCountries));
    this.#countriesClass();
  }

  countriesReset() {
    this.$countriesContent.innerHTML = "";
  }

  createCountryCard(country) {
    const $country = document.createElement("div");
    $country.classList.add("country");

    $country.id = country.cca2;

    const populationToDecimal = country.area.toLocaleString("pt-BR");

    const countryInnerHTML = ` <a href="/#countrypage/${$country.id}"><img
            src="${country.flags[1]}"
            alt="${country.cca3}"
            class="country-flag"
          />
          <h1 class="country-name">${country.name.official}</h1>
          <h2 class="country-population">
            Population:<span class="population-value">${populationToDecimal}</span>
          </h2>
          <h3 class="country-region">
            Region:<span class="region-value">${country.region}</span>
          </h3>
          <h4 class="country-capital">
            Capital:<span class="capital-value">${country.capital}</span>
          </h4><a/>`;

    $country.innerHTML = countryInnerHTML;
    this.#countriesClass();
    this.$countriesContent.appendChild($country);
  }

  #countriesClass() {
    setTimeout(() => {
      const countryLength = this.$countriesContent.querySelectorAll(".country").length;
      const isLessThant6 = countryLength < 6;
      const classFn = isLessThant6 ? this.#elementClassAdd : this.#elementClassRemove;
      classFn(this.$countriesContent, "active");
    }, 60);
    clearTimeout();
  }
  #elementClassAdd($element, status) {
    $element.classList.add(status);
  }

  #elementClassRemove($element, status) {
    $element.classList.remove(status);
  }
}
