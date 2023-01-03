const container = document.querySelector("#controls");
const input = container.querySelector("input");
const createBtn = container.querySelector("[data-create]");
const destroyBtn = container.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


function createBoxes(){
  let num = input.value;
  console.log(num);
  let boxesArray = [];
  let width = 20;
  let height = 20;

  for(let i = 0;i < num; i++){
    width += 10;
    height += 10;

    let box = document.createElement('div');
    box.classList.add('boxes');
    box.style.width = `${width}px`;
    box.style.height = `${height}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesArray.push(box)
  }

  boxes.append(...boxesArray);
}

function destroyBoxes(){
  console.dir(boxes);
  boxes.innerHTML = "";
}


createBtn.addEventListener("click",createBoxes);
destroyBtn.addEventListener("click",destroyBoxes)