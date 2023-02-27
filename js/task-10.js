function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  boxesContainerEl: document.querySelector("#boxes"),
  controlFormEl: document.querySelector("#controls"),
  quantInputEl: document.querySelector('#controls input'),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
}; 

refs.boxesContainerEl.style.display = "flex";
refs.boxesContainerEl.style.justifyContent = "left";
refs.boxesContainerEl.style.gap = "5px";
refs.boxesContainerEl.style.flexWrap = "wrap";

let inputValue = 0;

refs.quantInputEl.addEventListener("blur", (e) => {
  inputValue = e.currentTarget.value;
});

refs.createBtn.addEventListener("click", createBoxes);
refs.destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  let boxWidth = 30;
  for (let i = 0; i < inputValue; i += 1) {
    let string = `<div style='width: ${boxWidth}px; height: ${boxWidth}px; background-color: ${getRandomHexColor()};'></div>`;
    boxWidth += 10;
    refs.boxesContainerEl.insertAdjacentHTML("beforeend", string);
  }
}

function destroyBoxes() {
  refs.boxesContainerEl.innerHTML = "";
}
