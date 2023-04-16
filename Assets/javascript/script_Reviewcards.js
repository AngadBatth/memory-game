var apiUrl = "https://pixabay.com/api/?key=35470846-6ad7c60aedc0594e1fbfdcde7&q=pet+dogs&image_type=photo";

  var cardData = [""];
  var faceUpCards = 0;
  var firstCard = null;
  var secondCard = null;
fetch(apiUrl)
  .then((res)=>res.json())
  .then((data)=>{

    cardData = [
      card1 = (data.hits[7].webformatURL),
      card2 = (data.hits[1].webformatURL),
      card3 = (data.hits[5].webformatURL),
      card4 = (data.hits[3].webformatURL),
      card5 = (data.hits[10].webformatURL),
      card6 = (data.hits[11].webformatURL),
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
  Image1 = card1,
  Image2 = card1,
  Image3 = card2,
  Image4 = card2,
  Image5 = card3,
  Image6 = card3,
  Image7 = card4,
  Image8 = card4,
  Image9 = card5,
  Image10 = card5,
  Image11 = card6,
  Image12 = card6
];

for(var i = imgSrc.length - 1; i > 0; i--){
  var j = Math.floor(Math.random()*(i+1));
  var randomOrder = imgSrc[i];
  imgSrc[i] = imgSrc[j];
  imgSrc[j] = randomOrder;
} 

imgSrc.alt = "random images";

// function that creates 12 background cards
let createCards = function () {
  let numImages = 12;
  let backImgSrc = "Assets/imagestoReplace/backCard.jpg";
  backImgSrc.alt = "black background with an lightbulb";

  for (let i = 0; i < numImages; i++) {
    let cardEl = document.createElement("div");
    cardEl.classList.add("card");

    let img = document.createElement("img");
    img.classList.add("back-img");
    img.setAttribute("cardImage", i);

    img.src = backImgSrc;

    cardEl.appendChild(img);
    cardsEl.appendChild(cardEl);
  }
};

createCards();

// Click event replaces the background card with random images
cardsEl.addEventListener("click", function (event) {
  let getAttribute = event.target.getAttribute("cardImage");
  const asset = imgSrc[getAttribute];
  console.log(asset);
  let img = event.target;
  console.log(img);
  img.setAttribute("src", asset);
  faceUpCards++;
  console.log(faceUpCards);
});
})
.catch(error=>{
  console.error(error);
});
