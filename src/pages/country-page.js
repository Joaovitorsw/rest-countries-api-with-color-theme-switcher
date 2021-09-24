import { CountryPageUI } from "../classes/country-page-ui.js";
import { DynamicBorders } from "../classes/dynamic-borders.js";
import { Utils } from "../classes/utils.js";

export async function CountryPage(id) {
  const actuallyCountry = await CountryPageUI.getCountry(id);
  const { flags, region, subregion, tld, cca3, capital, area, name, currencies, languages, borders } = actuallyCountry;
  const { common, official } = name;

  const hasBorder = (borders) => {
    if (borders === undefined) return (borders = []);
    return borders;
  };

  const $countryPage = Utils.createElementWithClass("div", "country-page");
  const $countryContent = Utils.createElementWithClass("div", "country-content");
  const $countryText = Utils.createElementWithClass("div", "country-text");
  const dynamicBorders = await new DynamicBorders(hasBorder(borders));
  const $divBorders = await dynamicBorders.dynamicBordersUI();

  const currenciesArray = Array.from(currencies);
  const currenciesExtract = Object.keys(currencies).forEach((item) => {
    const { name, symbol } = currencies[item];
    currenciesArray.push(` ${name}  ${symbol} `);
  });

  const languagesArray = Array.from(languages);
  const languagesExtract = Object.keys(languages).forEach((item) => {
    languagesArray.push(`${languages[item]}`);
  });

  console.log(currenciesArray);

  $countryContent.innerHTML = `
  <a href="/#"<button class="back"><img alt="&larr;" class="arrow" /> Back</button></a>`;

  $countryPage.innerHTML = `
     <div class="country-page-flag">
      <img src="${flags[0]}" alt="${cca3}"/>
      </div>
      `;

  $countryText.innerHTML = `      

   <h1 class="country-page-name">${common}</h1>
   <ul class="country-list-info">
      <li class="country-info"><span>Native Name: </span>${official}</li>
      <li class="country-info"><span>Population: </span> ${area.toLocaleString("pt-BR")}</li>
      <li class="country-info"><span>Region: </span>${region}</li>
      <li class="country-info"><span>Sub Region: </span>${subregion}</li>
      <li class="country-info"><span>Capital: </span>${capital}</li>
      <li class="country-info"><span>Top Level Domain: </span>${tld[0]}</li>
      <li class="country-info"><span>Currencies: </span>${currenciesArray.join(",")}
      </li>
      <li class="country-info"><span>Languages: </span>${languagesArray.join(",")}
      </li>
   </ul>
  `;

  $countryText.appendChild($divBorders);
  $countryPage.appendChild($countryText);
  $countryContent.append($countryPage);

  return $countryContent;
}
