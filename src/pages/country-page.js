export async function CountryPage(id) {
  const request = await fetch(`https://restcountries.eu/rest/v2/alpha/${id}`);
  const actuallyCountry = await request.json();
}
