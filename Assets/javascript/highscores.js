// Get the highScoresList and namesList id from HTML to update the list
const highScoresList = document.getElementById("highScoresList");
const namesList = document.getElementById("namesList");

var highScores1 = [];

function displayScores () {
// Retrieve scores from local storage
highScores1 = JSON.parse(localStorage.getItem("highScores2"));
for (i = 0; i < highScores1.length; i++) {
// Create a list to display the scores
var score1 = document.createElement("li");
var name1 = document.createElement("li");
score1.textContent = highScores1[i].score;
name1.textContent = highScores1[i].name;
highScoresList.appendChild(score1);
namesList.appendChild(name1);
}
}

displayScores();