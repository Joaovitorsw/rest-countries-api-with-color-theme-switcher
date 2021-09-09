export class CountriesAPI {
  static getCountries = async () => {
    const countries = await fetch(`https://restcountries.eu/rest/v2/all
    `);
    return countries.json();
  };
}
