localStorage.clear();

function getInfo() {
    let country = document.getElementById('country').value;
    let population = document.getElementById('population').value;
    let capitalCity = document.getElementById('capitalCity').value;
    return [country, population, capitalCity];
}

function getString(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

function countryInfo() {
    let [country, population, capitalCity] = getInfo();
    let info = getString(country, population, capitalCity);
    document.getElementById('result').innerHTML += info + '<br>';
}

function clearInfo() {
    localStorage.clear();
    document.getElementById('result').innerHTML = '';
    document.getElementById('country').value = 'Spain';
    document.getElementById('population').value = '47';
    document.getElementById('capitalCity').value = 'Madrid';
}