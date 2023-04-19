const highScoresList = document.getElementById("highScoresList");
//const highScores = JSON.parse(localStorage.getItem("highScores"));

var highScores1 = [];
var score = [5, 4, 8];
var highScoresLength = 0;

localStorage.setItem("highScores", JSON.stringify(score));

function displayScores () {
    highScores1 = JSON.parse(localStorage.getItem("highScores"));
    for (i = 0; i < highScores1.length; i++) {
        var score1 = document.createElement("li");
        score1.textContent = highScores1[i];
        highScoresList.appendChild(score1);
}
}
displayScores();
