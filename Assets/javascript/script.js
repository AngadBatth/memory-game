var timerEl = document.getElementById("timer");
var secondLeft = 60;


//This is the fucntion to countdown time.
function setTime() {
    var timerInterval = setInterval(function () {
      secondLeft--;
      timerEl.textContent = "Time: " + secondLeft;
  
      if (secondLeft < 1) {
        clearInterval(timerInterval);
         // add here the function change to the score ranking
      }
    }, 1000);
  }

  //need to update the function (cards.addEventListner('click', etc)) when the user flip the first card  later
  //(cardelement).addEventListener('click', () = >{ setTime();})
  //need to update 10 seconds substracle function after cardsgame function is completed ( secondLeft -= 10; if 2 chosen cards are not matched)