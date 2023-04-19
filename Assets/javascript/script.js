var timerEl = document.getElementById("timer");
var modalEl = document.querySelector(".modal");
var initialEl = document.querySelector(".custom-input");
var inpName = document.getElementById("inits");
var submitBtn = document.getElementById("submit");
var initial="";
var secondLeft = 60;


//This is the fucntion to countdown time.
function setTime() {
    var timerInterval = setInterval(function () {
      secondLeft--;
      timerEl.textContent = "Time: " + secondLeft;
  
      if (secondLeft <1) {
        clearInterval(timerInterval);
         // add here the function change to the score ranking
         cardsEl.innerHTML="";
         timerEl.innerHTML="";
         modalEl.setAttribute('class', 'is-active')
      }
    }, 1000);
  }

  setTime();

  // function moveHighscore(){
  //   initial = initialEl.value.trim();
  //   initialEl.setAttribute("type", "text");
  //   location.replace('./highscores.html');
  // }
  
  // Submit button to save high score and go to high scores page
  submitBtn.addEventListener("click", function highscore() {
    
    // Get the current high score array to add to it the new high score
    var highscore = JSON.parse(localStorage.getItem("highScores2")) || [];
    // Get the name of user and trim it if theres any spaces before/after
    var user = inpName.value.trim();
    // Current score object to store name and score (number of points) of user
    var currentscore = {
        name : user,
        score : points
    };
    // Add the new current score object to the high scores array
   highscore.push(currentscore);
   // Add the new highscore array into local storage
   localStorage.setItem("highScores2", JSON.stringify(highscore));
   
   initial = initialEl.value.trim();
   initialEl.setAttribute("type", "text");
   location.replace('./highscores.html');
   
     });
  