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

function countryInfo1() {
    let [country, population] = getInfo();
    let info = getString(country, population, percentageOfWorld1(population));
    document.getElementById('resultFn1').innerHTML += info + '<br>';
}

function countryInfo2() {
    let [country, population] = getInfo();
    let info = getString(country, population, percentageOfWorld1(population));
    document.getElementById('resultFn2').innerHTML += info + '<br>';
}

function clearInfo() {
    localStorage.clear();
    document.getElementById('resultFn1').innerHTML = '';
    document.getElementById('resultFn2').innerHTML = '';
    document.getElementById('country').value = 'Spain';
    document.getElementById('population').value = '47';
}