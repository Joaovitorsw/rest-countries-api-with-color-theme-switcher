import { DynamicBorders } from "../classes/dynamic-borders.js";

export async function CountryPage(id) {
  const request = await fetch(`
https://restcountries.com/v3/alpha/${id}`);
  const data = await request.json();
  const actuallyCountry = data[0];

  const $countryPage = document.createElement("div");
  const $countryContent = document.createElement("div");
  const $countryText = document.createElement("div");
  const dynamicBorders = await new DynamicBorders(actuallyCountry.borders);
  const $divBorders = await dynamicBorders.dynamicBordersUI();

  $countryPage.classList.add("country-page");
  $countryContent.classList.add("country-content");
  $countryText.classList.add("country-text");
  console.log(actuallyCountry);
  const populationInDecimal = actuallyCountry.area.toLocaleString("pt-BR");

  $countryContent.innerHTML = `     <a href="/#"<button class="back"><img alt="&larr;" class="arrow" /> Back</button></a>`;
  $countryPage.innerHTML = `
     <div class="country-page-flag">
      <img src="${actuallyCountry.flags[1]}" alt="${actuallyCountry.cca3}" />
      </div>
      `;
  $countryText.innerHTML = `      

   <h1 class="country-page-name">${actuallyCountry.name.official}</h1>
   <ul class="country-list-info">
      <li class="country-info"><span>Native Name: </span>${actuallyCountry.name.nativeName.official}</li>
      <li class="country-info"><span>Population: </span> ${populationInDecimal}</li>
      <li class="country-info"><span>Region: </span>${actuallyCountry.region}</li>
      <li class="country-info"><span>Sub Region: </span>${actuallyCountry.subregion}</li>
      <li class="country-info"><span>Capital: </span>${actuallyCountry.capital}</li>
      <li class="country-info"><span>Top Level Domain: </span>${actuallyCountry.tld[0]}</li>
      <li class="country-info"><span>Currencies: </span>${actuallyCountry.currencies}
      </li>
      <li class="country-info"><span>Languages: </span>${actuallyCountry.languages}
      </li>
   </ul>
  `;

  $countryText.appendChild($divBorders);
  $countryPage.appendChild($countryText);
  $countryContent.append($countryPage);

  return $countryContent;
}
