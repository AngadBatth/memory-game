var timerEl = document.getElementById("timer");
var modalEl = document.querySelector(".modal");
var initialEl = document.querySelector(".custom-input");
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

  function moveHighscore(){
    initial = initialEl.value.trim();
    initialEl.setAttribute("type", "text");
    location.replace('./highscores.html');
  }
  