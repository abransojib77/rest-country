const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries()

const displayCountries = countries => {
    const p = document.getElementById('country')
    // for (const country of countries) {
    //     console.log(country)
    // }

    countries.forEach(country => {
        // console.log(country)
        const h = document.createElement('h3')
        h.classList.add('border')
        h.innerHTML = `
       Country Name: ${country.name}
       Country Capital : ${country.capital}
       <button onclick="loadCountryByName('${country.name}')">Details</button>
        `
        p.appendChild(h)
    });


}

const loadCountryByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]))
    // console.log(url)
}

const displayCountryDetail = country => {
    const div = document.getElementById('country-detail')
    div.innerHTML = `
<h3>Name:    ${country.name}</h3>
<h3>Capital :${country.capital}<h3>
<h3>Population :${country.population}<h3>
<img width=300px; src="${country.flag}"></img>
    `
    console.log(country)
}
