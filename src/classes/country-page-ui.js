import { BasicStorage } from "./basic-storage.js";

export class CountryPageUI {
  static async getCountry(id) {
    const cachedCountry = BasicStorage.getById(id);

    if (cachedCountry) return cachedCountry[0];

    const request = await fetch(`https://restcountries.com/v3/alpha/${id}`);
    const data = await request.json();

    BasicStorage.set(id, data);
    return data[0];
  }
}
