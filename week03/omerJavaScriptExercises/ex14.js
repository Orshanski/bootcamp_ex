document.getElementById('submit').addEventListener('click', function () {

    const language = document.getElementById('language').value;
    const isIsland = document.getElementById('isIsland').checked;
    const population = document.getElementById('population').value;
    const country = document.getElementById('country').value;

    countryToLiveIn(language, isIsland, population, country);

    function countryToLiveIn(language, isIsland, population, country) {
        console.log(language, isIsland, population, country);
        country = capitalizeFirstLetter(country);

        function capitalizeFirstLetter(word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }

        answer = '';
        if (language === 'english' && population < 50 && !isIsland) {
            answer = `You should live in <b>${country}</b>`;
        } else {
            answer = `<b>${country}</b> does not meet your criteria`;
        }

        document.getElementById('result').innerHTML = answer;
    }
})
