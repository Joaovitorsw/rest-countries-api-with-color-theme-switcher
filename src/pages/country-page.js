export async function CountryPage(id) {
  const request = await fetch(`https://restcountries.eu/rest/v2/alpha/${id}`);
  const actuallyCountry = await request.json();

  const $countryPage = document.createElement("div");
  const $countryContent = document.createElement("div");
  const $countryText = document.createElement("div");

  $countryPage.classList.add("country-page");
  $countryContent.classList.add("country-content");
  $countryText.classList.add("country-text");
}
