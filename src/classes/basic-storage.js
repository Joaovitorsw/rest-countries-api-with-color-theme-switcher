export class BasicStorage {
  static getById(key) {
    const storedKey = JSON.parse(localStorage.getItem(key)) ?? false;
    return storedKey;
  }
  static get(key) {
    const storedKey = JSON.parse(localStorage.getItem(key)) ?? false;
    return storedKey;
  }
  static set(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
  }
}
