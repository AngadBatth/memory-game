var apiUrl =
  "https://pixabay.com/api/?key=35470846-6ad7c60aedc0594e1fbfdcde7&q=pet+dogs&image_type=photo";

var cardData = [""];
var faceUpCards = 0;
var firstCard = null;
var secondCard = null;
fetch(apiUrl)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    cardData = [
      (card1 = data.hits[7].webformatURL),
      (card2 = data.hits[1].webformatURL),
      (card3 = data.hits[5].webformatURL),
      (card4 = data.hits[3].webformatURL),
      (card5 = data.hits[10].webformatURL),
      (card6 = data.hits[11].webformatURL),
    ];
    console.log(cardData[0]);
    console.log(cardData[1]);
    console.log(cardData[2]);
    console.log(cardData[3]);
    console.log(cardData[4]);
    console.log(cardData[5]);

    let cardsEl = document.querySelector("#cards");

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
    ];

    for (var i = imgSrc.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var randomOrder = imgSrc[i];
      imgSrc[i] = imgSrc[j];
      imgSrc[j] = randomOrder;
    }
    imgSrc.alt = "random images";

    let cardsWon = [];
    // empty array to store the last two cards clicked
    let lastTwoCards = [];
    // empty array to store the matched cards
    let cardsMatch = [];

    // function that creates the background cards
    let createCards = function () {
      let numImages = 12;
      let backImgSrc = "Assets/imagestoReplace/backCard.jpg";
      backImgSrc.alt = "black background with an lightbulb";

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
          console.log("Match!");
          // add the matched cards to the matched cards array
          cardsMatch.push(lastTwoCards[0], lastTwoCards[1]);
        } else {
          console.log("No match!");
        }
        // clear the last two cards array
        lastTwoCards = [];
      }
    });
  })
  .catch((error) => {
    console.error(error);
  });
