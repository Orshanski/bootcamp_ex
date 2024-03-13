let population = {
    "USA": 331002651,
    "China": 1439323776,
    "India": 1380004385,
    "Indonesia": 273523615,
    "Pakistan": 220892340,
};

let populations = Object.values(population);

const totalPopulation = 7_800_000_000;

function getPercentage(population) {
    return (population / totalPopulation) * 100;
}

function populationPercentage(populations) {
    let percentage = [];
    for (let i = 0; i < populations.length; i++) {
        percentage.push(
            `The percentage of the world population 
            for ${Object.keys(population)[i]}
            is ${getPercentage(populations[i]).toFixed(2)}%`);
    }
    return percentage;
}

document.getElementById("result").innerHTML = 
                populationPercentage(populations).join("<br>");