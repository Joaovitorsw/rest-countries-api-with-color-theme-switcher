export async function HomePage() {
  const $div = document.createElement("div");
  $div.classList.add("homepage");

  $div.innerHTML = `  <div class="navigation-content">
          <div class="search-bar">
            <img class="search-bar-icon" alt="search-bar-icon" />
            <input class="search-bar-input" type="text" autocomplete="off" />
            <label class="search-bar-label" for="country">Search for a country...</label>
          </div>
          <div class="select-box">
            <div class="options-container">
              <div class="option">
                <input type="radio" class="radio" value="" />
                <label for="None">Filter by Region</label>
              </div>
              <div class="option">
                <input type="radio" class="radio" value="africa" />
                <label for="Africa">Africa</label>
              </div>
              <div class="option">
                <input type="radio" class="radio" value="americas" />
                <label for="Americas">Americas</label>
              </div>
              <div class="option">
                <input type="radio" class="radio" value="asia" />
                <label for="Asia">Asia</label>
              </div>
              <div class="option">
                <input type="radio" class="radio" value="europe" />
                <label for="Europe">Europe</label>
              </div>
              <div class="option">
                <input type="radio" class="radio" value="oceania" />
                <label for="Oceania">Oceania</label>
              </div>
            </div>
            <div class="selected">Filter by Region</div>
          </div>
        </div>
        <div class="countries"></div>`;

  return $div;
}
