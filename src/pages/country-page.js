import { CountryPageUI } from "../classes/country-page-ui.js";
import { DynamicBorders } from "../classes/dynamic-borders.js";
import { Utils } from "../classes/utils.js";

export async function CountryPage(id) {
  const actuallyCountry = await CountryPageUI.getCountry(id);
  console.log(actuallyCountry);
  const { flags, region, continent, topLevelDomain, alpha3Code, capital, population, name, nativeName, currencies, languages, borders } =
    actuallyCountry;

  const hasProperty = (property) => {
    if (property === undefined) return (property = []);
    return property;
  };

  const $countryPage = Utils.createElementWithClass("div", "country-page");
  const $countryContent = Utils.createElementWithClass("div", "country-content");
  const $countryText = Utils.createElementWithClass("div", "country-text");
  const dynamicBorders = await new DynamicBorders(hasProperty(borders));
  const $divBorders = await dynamicBorders.dynamicBordersUI();

  const currenciesArray = [];
  const currenciesExtract = Object.keys(hasProperty(currencies)).forEach((item) => {
    const { name, code } = currencies[item];
    currenciesArray.push(` ${name}  ${code} `);
  });

  const languagesArray = [];
  const languagesExtract = Object.keys(hasProperty(languages)).forEach((item) => {
    const { name, nativeName } = languages[item];
    languagesArray.push(` ${name}  ${nativeName} `);
  });

  $countryContent.innerHTML = `
  <a href="/#"<button class="back"><img alt="&larr;" class="arrow" /> Back</button></a>`;

  $countryPage.innerHTML = `
     <div class="country-page-flag">
      <img src="${flags[0]}" alt="${alpha3Code}"/>
      </div>
      `;

  $countryText.innerHTML = `      

   <h1 class="country-page-name">${name}</h1>
   <ul class="country-list-info">
      <li class="country-info"><span>Native Name: </span>${nativeName}</li>
      <li class="country-info"><span>Population: </span> ${population.toLocaleString("pt-BR")}</li>
      <li class="country-info"><span>Region: </span>${region}</li>
      <li class="country-info"><span>Sub Region: </span>${continent}</li>
      <li class="country-info"><span>Capital: </span>${hasProperty(capital)}</li>
      <li class="country-info"><span>Top Level Domain: </span>${topLevelDomain}</li>
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
