import { BasicStorage } from "./basic-storage.js";

export class CountryPageUI {
  static async getCountry(id) {
    const cachedCountry = BasicStorage.getById(id);

    if (cachedCountry) return cachedCountry;

    const request = await fetch(`https://restcountries.com/v2/alpha/${id}`);
    const data = await request.json();

    BasicStorage.set(id, data);
    return data;
  }
}
