const body = document.querySelector("body");
const colorHex  = document.querySelector(".color");
const btn = document.querySelector("button");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor(){
      let randColor = getRandomHexColor();
      body.style.backgroundColor = randColor;
      colorHex.textContent = randColor;
}

btn.addEventListener("click",changeColor)