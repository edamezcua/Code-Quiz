function displayScore(){
    console.log('here')
    var highscores = JSON.parse(localStorage.getItem('highscores'))|| []

    highscores.sort(function(a, b){
        return b.score - a.score 
    })

    highscores.forEach(function(score){
        console.log(score)
        var liTag = document.createElement('li');
        liTag.textContent = score.intials + " - " + score.score

        var savedScore = document.getElementById('savedScore');
        savedScore.appendChild(liTag)

    })
}

function clearHighScores(){
    window.localStorage.removeItem('highscores');
    window.location.reload();
}

document.getElementById('clearScore').onclick = clearHighScores;

displayScore();