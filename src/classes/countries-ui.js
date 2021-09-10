import { CountriesAPI } from "../classes/countries-api.js";

export class CountriesUI {
  $countriesContent;

  constructor($element) {
    this.$countriesContent = document.querySelector($element);
    CountriesAPI.getCountries().then((countries) => {
      this.countriesReset();
      countries.forEach((country) => this.createCountryCard(country));
    });
  }

  async createRegions() {
    const hasRegion = this.regionValue !== "Filter by Region";
    const countriesFn = hasRegion
      ? CountriesAPI.getRegions
      : CountriesAPI.getCountries;
    const regions = await countriesFn(this.regionValue);
    this.countriesReset();
    regions
      .filter((regionCountries) => {
        const regionCountriesLowerCase = regionCountries.name.toLowerCase();
        const userText = this.inputText.toLowerCase();
        const hasCountry = regionCountriesLowerCase.indexOf(userText) > -1;
        return hasCountry ?? regionCountries;
      })
      .forEach((filteredRegionsCountries) =>
        this.createCountryCard(filteredRegionsCountries)
      );
  }

  countriesReset() {
    this.$countriesContent.innerHTML = "";
  }

  createCountryCard(country) {
    const $country = document.createElement("div");
    $country.classList.add("country");
    $country.id = country.alpha2Code;

    const populationToDecimal = country.population.toLocaleString("pt-BR");

    const countryInnerHTML = ` <a href="/#countrypage/${$country.id}"><img
            src="${country.flag}"
            alt="${country.alpha3Code}"
            class="country-flag"
          />
          <h1 class="country-name">${country.name}</h1>
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
    this.$countriesContent.appendChild($country);
  }
}
