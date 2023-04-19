var timerEl = document.getElementById("timer");
var modalEl = document.querySelector(".modal");
var initialEl = document.querySelector(".custom-input");
var initial="";
var secondLeft = 6;


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
    location.replace('./highscores.html');
  }

  //need to update the function (cards.addEventListner('click', etc)) when the user flip the first card  later
  //(cardelement).addEventListener('click', () = >{ setTime();})
  //need to update 10 seconds substracle function after cardsgame function is completed ( secondLeft -= 10; if 2 chosen cards are not matched)

  