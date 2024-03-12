
function languageRank(language) {
    language = document.getElementById('language').value;
    
    let answer = '';
    function getRank(language) {
        switch (language) {
            case 'mandarin':
                answer = 'MOST number of native speakers!';
                break;
            case 'spanish':
                answer = '2nd place in a number of native speakers';
                break;
            case 'english':
                answer = '3rd place';
                break;
            case 'hindi':
                answer = 'Number 4';
                break;
            case 'arabic':
                answer = '5th most spoken language';
                break;
            default:
                answer = 'Not in the top 5';
                break;
        }
        return answer;
    }
    document.getElementById('languageRank').innerHTML = getRank(language);
}