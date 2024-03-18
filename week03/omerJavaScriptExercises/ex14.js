function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

function countryToLiveIn(language, isIsland, population, country) {
    let language = document.getElementById('language').value;
    let isIsland = document.getElementById('isIsland').checked;
    let population = document.getElementById('population').value;
    let country = document.getElementById('country').value;
    country = capitalizeFirstLetter(country);

    answer = '';
    if (language === 'english' && population < 50 && !isIsland) {
        answer = `You should live in <b>${country}</b>`;
    } else {
        answer = `<b>${country}</b> does not meet your criteria`;
    }

    document.getElementById('result').innerHTML = answer;
}