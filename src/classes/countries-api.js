import { BasicStorage } from "./basic-storage.js";

export class CountriesAPI {
  static getCountries = async () => {
    const cachedCountries = BasicStorage.get("countries");
    if (cachedCountries) return cachedCountries;

    const countries = await fetch(`https://restcountries.com/v2/all`);
    const data = await countries.json();
    BasicStorage.set("countries", data);

    return data;
  };

  static getRegions = async (region) => {
    const countries = await this.getCountries();
    return countries.filter((countries) => countries.continent === region);
  };
}
