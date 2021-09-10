import { DynamicBorders } from "../classes/dynamic-borders.js";

export async function CountryPage(id) {
  const request = await fetch(`https://restcountries.eu/rest/v2/alpha/${id}`);
  const actuallyCountry = await request.json();

  const $countryPage = document.createElement("div");
  const $countryContent = document.createElement("div");
  const $countryText = document.createElement("div");
  const dynamicBorders = await new DynamicBorders(country.borders);

  $countryPage.classList.add("country-page");
  $countryContent.classList.add("country-content");
  $countryText.classList.add("country-text");

  const populationInDecimal =
    actuallyCountry.population.toLocaleString("pt-BR");

  $countryContent.innerHTML = `     <a href="/#"<button class="back"><img alt="&larr;" class="arrow" /> Back</button></a>`;
  $countryPage.innerHTML = `
     <div class="country-page-flag">
      <img src="${actuallyCountry.flag}" alt="${actuallyCountry.alpha3Code}" />
      </div>
      `;
  $countryText.innerHTML = `      

   <h1 class="country-page-name">${actuallyCountry.name}</h1>
   <ul class="country-list-info">
      <li class="country-info"><span>Native Name: </span>${
        actuallyCountry.nativeName
      }</li>
      <li class="country-info"><span>Population: </span> ${populationInDecimal}</li>
      <li class="country-info"><span>Region: </span>${
        actuallyCountry.region
      }</li>
      <li class="country-info"><span>Sub Region: </span>${
        actuallyCountry.subregion
      }</li>
      <li class="country-info"><span>Capital: </span>${
        actuallyCountry.capital
      }</li>
      <li class="country-info"><span>Top Level Domain: </span>${
        actuallyCountry.topLevelDomain
      }</li>
      <li class="country-info"><span>Currencies: </span>${actuallyCountry.currencies
        .reduce(
          (accu, curr) =>
            accu.concat([`${curr.code} ${curr.symbol} (${curr.name})`]),
          []
        )
        .join(", ")}
      </li>
      <li class="country-info"><span>Languages: </span>${actuallyCountry.languages
        .reduce(
          (accu, curr) => accu.concat(`${curr.nativeName} (${curr.name})`),
          []
        )
        .join(", ")}
      </li>
   </ul>
  `;

  $countryText.appendChild($divBorders);
  $countryPage.appendChild($countryText);
  $countryContent.append($countryPage);

  return $countryContent;
}
