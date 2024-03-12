function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

function countryToLiveIn(language, isIsland, population, country) {
    var language = document.getElementById('language').value;
    var isIsland = document.getElementById('isIsland').checked;
    var population = document.getElementById('population').value;
    var country = document.getElementById('country').value;
    country = capitalizeFirstLetter(country);

    answer = '';
    if (language === 'english' && population < 50 && !isIsland) {
        answer = `You should live in <b>${country}</b>`;
    } else {
        answer = `<b>${country}</b> does not meet your criteria`;
    }

    document.getElementById('result').innerHTML = answer;
}