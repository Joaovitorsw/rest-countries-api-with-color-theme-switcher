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
    const regionRequest = await fetch(`https://restcountries.com/v3/region/${region}
    `);

    return regionRequest.json();
  };
}
