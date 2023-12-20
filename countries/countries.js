const loadData = (regionName) => {
    const URL = `https://restcountries.com/v3.1/region/${regionName}`;
    fetch(URL)
        .then(res => res.json())
        .then(data => displayData(data))
}
const displayData = (countries) => {
    // console.log(countries)
    const countriesContainer = document.getElementById('countries-container');
    countriesContainer.innerHTML = '';
    countries.forEach((country) => {
        // console.log(country)
        const { name, flags, capital, population, region, } = country;
        const countryContainer = document.createElement('div');
        countryContainer.classList.add('col');
        countryContainer.innerHTML = `
        <div class="card h-100">
            <img src="${flags.png}" class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="card-title">${name.common}</h4>
                <h5>Capital: ${capital}</h5>
                <h5>Population: ${population}</h5>
                <h5>Region: ${region}</h5>
            </div>
        </div>
        `;
        countriesContainer.appendChild(countryContainer);
    });
}
loadData('asia')