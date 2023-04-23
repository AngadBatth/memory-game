// Get the highScoresList and namesList id from HTML to update the list
const highScoresList = document.getElementById("highScoresList");
const namesList = document.getElementById("namesList");
const clearBtn = document.getElementById("clear");

var highScoresUser = [];

function displayScores () {
// Retrieve scores from local storage
highScoresUser = JSON.parse(localStorage.getItem("highScores"));
// Check if highscores array is empty and if so display no scores yet
if (!highScoresUser) {
    var empty = document.createElement("li");
    empty.textContent = "No scores yet!";
    highScoresList.appendChild(empty);
}
// Sort highscores to display from highest to lowest
highScoresUser.sort((a, b) => {
    return b.score - a.score;
});
console.log(highScoresUser);
for (i = 0; i < highScoresUser.length; i++) {
   // if (highScoresUser[i].name == )
// Create a list to display the scores
var scoreUser = document.createElement("li");
var nameUser = document.createElement("li");
scoreUser.textContent = highScoresUser[i].score;
nameUser.textContent = highScoresUser[i].name;
highScoresList.appendChild(scoreUser);
namesList.appendChild(nameUser);
}
}

displayScores();