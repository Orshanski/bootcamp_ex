localStorage.clear();

function getInfo() {
    let country = document.getElementById('country').value;
    let population = document.getElementById('population').value;
    return [country, population];
}

function getString(country, population, percentage) {
    return `${country} has ${population} million people and its population is about ${percentage}% of the world population.`;
}

function percentageOfWorld1(population) {
    const worldPopulation = 7900; // assuming world population is 7.9 billion
    const percentage = (population / worldPopulation) * 100;
    return percentage.toFixed(1);
}

const percentageOfWorld2 = function (population) {
    const worldPopulation = 7900; // assuming world population is 7.9 billion
    const percentage = (population / worldPopulation) * 100;
    return percentage.toFixed(1);
}

function saveInfo1() {
    let [country, population] = getInfo();
    let info = getString(country, population, percentageOfWorld1(population));
    let countries = JSON.parse(localStorage.getItem('countries')) || [];
    countries.push(info);
    localStorage.setItem('countries', JSON.stringify(countries));
}

function saveInfo2() {
    
    let [country, population] = getInfo();
    let info = getString(country, population, percentageOfWorld2(population));
    let countries1 = JSON.parse(localStorage.getItem('countries1')) || [];
    countries1.push(info);
    localStorage.setItem('countries1', JSON.stringify(countries1));
}

function countryInfo1() {
    saveInfo1();
    let countries = JSON.parse(localStorage.getItem('countries')) || [];
    let result = '';
    for (let country of countries) {
        result += country + '<br>';
    }
    document.getElementById('resultFn1').innerHTML = result;
}

function countryInfo2() {
    saveInfo2();
    let countries = JSON.parse(localStorage.getItem('countries1')) || [];
    let result = '';
    for (let country of countries) {
        result += country + '<br>';
    }
    document.getElementById('resultFn2').innerHTML = result;
}

function clearInfo() {
    localStorage.clear();
    document.getElementById('resultFn1').innerHTML = '';
    document.getElementById('resultFn2').innerHTML = '';
    document.getElementById('country').value = 'Spain';
    document.getElementById('population').value = '47';
}