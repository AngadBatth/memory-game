var timerEl = document.getElementById("timer");
var modalEl = document.querySelector(".modal");
var pEl = document.querySelector(".your-point");
var initialEl = document.querySelector(".custom-input");
var inpName = document.getElementById("inits");
var submitBtn = document.getElementById("submit");
var easyBtn = document.getElementById("easy");
var mediumBtn = document.getElementById("medium");
var hardBtn = document.getElementById("hard");

if (easyBtn) {
  easyBtn.addEventListener("click", function easy() {
    location.replace("./game.html");
    var level = "easy";
    localStorage.setItem("level", JSON.stringify(level));
  });
}
if (mediumBtn) {
  mediumBtn.addEventListener("click", function medium() {
    location.replace("./game.html");
    var level = "medium";
    localStorage.setItem("level", JSON.stringify(level));
  });
}
if (hardBtn) {
  hardBtn.addEventListener("click", function hard() {
    location.replace("./game.html");
    var level = "hard";
    localStorage.setItem("level", JSON.stringify(level));
  });
}

// Retrieve level from local storage
var level = JSON.parse(localStorage.getItem("level"));
console.log(level);

// Select number of cards based on difficulty chosen
if (level == "easy") {
  var numImages = 8;
} else if (level == "medium") {
  var numImages = 12;
} else if (level == "hard") {
  var numImages = 16;
}

var apiUrl =
  "https://pixabay.com/api/?key=35470846-6ad7c60aedc0594e1fbfdcde7&q=pet+dogs&image_type=photo";

let jokesUrl = "https://official-joke-api.appspot.com/jokes/random";

var initial = "";
var secondLeft = 91;
var cardData = [""];
var points = 0;
let selectedCardsCount = 0;
let jokeContainer = document.querySelector("#joke");
let cardsEl;
// empty array to store the last two cards clicked
let lastTwoCards = [];
// empty array to store the matched cards
let cardsMatch = [];
// empty object to store the cards that don't match
let cardsNotMatch = {
  card1: "",
  card2: "",
};

let backImgSrc = "Assets/image/backCard.jpg";
backImgSrc.alt = "black background with an lightbulb";

fetch(apiUrl)
  .then((res) => res.json())
  .then((data) => {
    // SUGESTION: generate random number to get random image from the array when reload the page?
    cardData = [
      (card1 = data.hits[7].webformatURL),
      (card2 = data.hits[1].webformatURL),
      (card3 = data.hits[5].webformatURL),
      (card4 = data.hits[3].webformatURL),
      (card5 = data.hits[10].webformatURL),
      (card6 = data.hits[11].webformatURL),
      (card7 = data.hits[15].webformatURL),
      (card8 = data.hits[18].webformatURL),
    ];

    cardsEl = document.querySelector("#cards");

    // Random Images cards
    let imgSrc = [
      card1,
      card1,
      card2,
      card2,
      card3,
      card3,
      card4,
      card4,
      card5,
      card5,
      card6,
      card6,
      card7,
      card7,
      card8,
      card8,
    ];

    for (var i = numImages - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var randomOrder = imgSrc[i];
      imgSrc[i] = imgSrc[j];
      imgSrc[j] = randomOrder;
    }
    imgSrc.alt = "random images";

    // function that creates the background cards
    let createCards = function () {
      // loop through the number of cards we want to display
      for (let i = 0; i < numImages; i++) {
        // create a div element
        let cardEl = document.createElement("div");
        // add a class to the div element
        cardEl.classList.add("card");
        // create an img element
        let img = document.createElement("img");
        // add a class to the img element
        img.classList.add("back-img");
        // add a custom attribute to the img element
        img.setAttribute("cardImage", i);

        // add the background image variable to the img element
        img.src = backImgSrc;

        cardEl.appendChild(img);
        cardsEl.appendChild(cardEl);
      }
    };

    createCards();

    // function that checks if two images are the same comparing the src "name" attribute
    let isSameImage = function (img1, img2) {
      return img1.getAttribute("src") === img2.getAttribute("src");
    };

    // Click event replaces the background cards with random images in the index position
    cardsEl.addEventListener("click", function (event) {
      // Check if there are already two cards selected
      if (selectedCardsCount > 1) {
        console.log(selectedCardsCount);
        return;
      }
      // Increment selectedCardsCount
      selectedCardsCount++;

      // check if the clicked element is already in the matched cards array if yes return and do not execute the rest of the code
      for (let i = 0; i < cardsMatch.length; i++) {
        let selectMatch = cardsMatch[i];
        if (event.target === selectMatch) {
          return;
        }
      }

      // get the value of the attribute cardImage from the img element
      let getAttribute = event.target.getAttribute("cardImage");
      // get the random image from the array based on the position of the background image index-> value of the attribute
      let asset = imgSrc[getAttribute];
      // event.target get the clicked image element
      let img = event.target;
      // when the background image is clicked, replace it with the random image from the array
      img.setAttribute("src", asset);
      // add the clicked image to the last two cards array
      lastTwoCards.push(img);

      // IF check if the last two cards match
      // Condition to check if the user has selected two cards
      if (lastTwoCards.length === 2) {
        // check if the last two cards match
        if (isSameImage(lastTwoCards[0], lastTwoCards[1])) {
          points++;
          console.log(points);
          let match = "Match!";
          console.log({ match });
          // add the matched cards to the matched cards array
          cardsMatch.push(lastTwoCards[0], lastTwoCards[1]);
          console.log({ cardsMatch });
          // reset the selected cards count
          selectedCardsCount = 0;
          if (numImages == cardsMatch.length) {
            cardsEl.innerHTML = "";
            timerEl.innerHTML = "";
            modalEl.setAttribute("class", "is-active");
            pEl.textContent = "Your point is " + points + " !";
          }
        } else {
          let noMatch = "No match!";
          console.log({ noMatch });

          // add the cards that does not match to the object
          cardsNotMatch.card1 = lastTwoCards[0];
          cardsNotMatch.card2 = lastTwoCards[1];

          // if not match Flip cards back -> after 1 second replace the cards with the background image again
          setTimeout(function () {
            cardsNotMatch.card1.setAttribute("src", backImgSrc);
            cardsNotMatch.card2.setAttribute("src", backImgSrc);
            // reset the selected cards count
            selectedCardsCount = 0;
          }, 1000);
        }

        // clear the last two cards array
        lastTwoCards = [];
      }
    });
  })
  .catch((error) => {
    console.error(error);
  });

// function that plays the background music when the user clicks on the button "Play"
function playBackgroundMusic() {
  createjs.Sound.initializeDefaultPlugins();
  createjs.Sound.registerSound(
    "Assets/music/Ice & Fire - King Canyon.mp3",
    "backgroundMusic"
  );

  createjs.Sound.play("backgroundMusic", { loop: -1 });
  createjs.Sound.volume = 0.07;
}
playBackgroundMusic();

// Get the button element
let buttonMusic = document.getElementById("play-button");
let buttonStopMusic = document.getElementById("stop-play-button");

// Add an event listener to the play music button
buttonMusic.addEventListener("click", function () {
  // Call the function to disable the button
  disableButton();
  // Call the function to play the background music
  playBackgroundMusic();
});

// Add an event listener to the stop play music button
buttonStopMusic.addEventListener("click", function () {
  // Call the function to unable the play button again
  buttonMusic.disabled = false;
});

// Function to disable the button
function disableButton() {
  buttonMusic.disabled = true;
}

// function that stop the background music when the user clicks on the button "Stop"
function stopBackgroundMusic() {
  createjs.Sound.stop();
}

let joke = function () {
  fetch(jokesUrl)
    .then((response) => response.json())
    .then((data) => {
      // create a h3 element
      let jokeQuestionEl = document.createElement("h3");
      // add a class to the h3 element
      jokeQuestionEl.classList.add("jokeQuestionEl");
      // create a p element
      let jokeAnswerEl = document.createElement("p");
      // add a class to the p element
      jokeAnswerEl.classList.add("jokeQuestionEl");

      // add the setup of the joke to the h3 element
      jokeQuestionEl.innerHTML = data.setup;
      // add the punchline of the joke to the p element
      jokeAnswerEl.innerHTML = data.punchline;

      // append the h3 and p elements to the joke container
      jokeContainer.appendChild(jokeQuestionEl);
      setTimeout(function () {
        jokeContainer.appendChild(jokeAnswerEl);
      }, 5000);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

joke();

//This is the fucntion to countdown time.
function setTime() {
  var timerInterval = setInterval(function () {
    secondLeft--;
    timerEl.textContent = "Time: " + secondLeft;

    if (secondLeft < 1) {
      clearInterval(timerInterval);
      // add here the function change to the score ranking
      cardsEl.innerHTML = "";
      timerEl.innerHTML = "";
      modalEl.setAttribute("class", "is-active");
      pEl.textContent = "Your point is " + points + " !";
    }
  }, 1000);
}

setTime();

if (submitBtn) {
  // Submit button to save high score and go to high scores page
  submitBtn.addEventListener("click", function highscore(event) {
    // Get the current high score array to add to it the new high score
    var highscore = JSON.parse(localStorage.getItem("highScores")) || [];
    // Get the name of user and trim it if theres any spaces before/after
    var user = inpName.value.trim();
    //showing error message if the input box is empty
    if(user==""){
      document.getElementById('inits').classList.add('is-danger');
      document.getElementById('error_message').setAttribute('style', 'display:block;')
      event.preventDefault();
      return;
    }
    // Current score object to store name and score (number of points) of user
    var currentscore = {
      name: user,
      score: points,
    };
    // Add the new current score object to the high scores array
    highscore.push(currentscore);
    // Add the new highscore array into local storage
    localStorage.setItem("highScores", JSON.stringify(highscore));

    initial = initialEl.value.trim();
    initialEl.setAttribute("type", "text");
    location.replace("./highscores.html");
  });
}
