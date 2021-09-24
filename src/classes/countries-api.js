export class CountriesAPI {
  static getCountries = async () => {
    const countries = await fetch(`https://restcountries.com/v3/all`);
    return countries.json();
  };

  static getRegions = async (region) => {
    const regionRequest = await fetch(`https://restcountries.com/v3/region/${region}
    `);
    return regionRequest.json();
  };
}
