const inputSliderEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputSliderEl.addEventListener("input", (e) => {
  textEl.style.fontSize = `${e.target.value}px`;
});
