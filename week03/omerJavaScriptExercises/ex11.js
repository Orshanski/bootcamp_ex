function average(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum / arr.length
}

function getWinner() {
    let jons_team_score = document.getElementById('jons-team').value.split(/[ ,;]+/).map(Number);
    let marys_team_score = document.getElementById('marys-team').value.split(/[ ,;]+/).map(Number);
    let mikes_team_score = document.getElementById('mikes-team').value.split(/[ ,;]+/).map(Number);
    let jons_team_average = average(jons_team_score);
    let marys_team_average = average(marys_team_score);
    let mikes_team_average = average(mikes_team_score);
    let max = Math.max(jons_team_average, marys_team_average, mikes_team_average);
    let winner = '';
    if (jons_team_average === max) {
        winner = 'Jon\'s team';
    } else if (marys_team_average === max) {
        winner = 'Mary\'s team';
    } else if (mikes_team_average === max) {
        winner = 'Mike\'s team';
    } else {
        winner = 'No winner';
    }
    if (max === 0) {
        document.getElementById('winner').innerHTML = 'There is no winner';
    } else {
        document.getElementById('winner').innerHTML = winner + ' is the winner with an average score of ' + max.toFixed(0) + ' points.;'
    }
}
