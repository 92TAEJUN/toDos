const body = document.querySelector("body");

const IMG_NUMBER = 3;

const IMG_URL = [
  { key: 0, URL: "images/2.jpg" },
  { key: 1, URL: "images/3.jpg" },
  { key: 2, URL: "images/4.jpg" }
];

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function paintImage(number) {
  const image = new Image();
  const imageUrl = IMG_URL[number].URL;
  image.src = imageUrl;
  image.classList.add("bgImage");
  body.prepend(image);
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
