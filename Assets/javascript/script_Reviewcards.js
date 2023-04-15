let cardsEl = document.querySelector("#cards");

// Random Images cards
let imgSrc = [
  "Assets/imagestoReplace/imga.jpg",
  "Assets/imagestoReplace/imgb.jpg",
  "Assets/imagestoReplace/imgc.jpg",
  "Assets/imagestoReplace/imgd.jpg",
  "Assets/imagestoReplace/imge.jpg",
  "Assets/imagestoReplace/imgf.jpg",
  "Assets/imagestoReplace/imgg.jpg",
  "Assets/imagestoReplace/imgh.jpg",
  "Assets/imagestoReplace/imgi.jpg",
];
imgSrc.alt = "random images";


  let cardsWon = []

// function that creates 12 background cards
let createCards = function () {
  let numImages = 8;
  let backImgSrc = "Assets/imagestoReplace/backCard.jpg";
  backImgSrc.alt = "balck background with an lightbulb";

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






});
