function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorValueEl = document.querySelector('.color');
const colorChangerBtn = document.querySelector('.change-color');

colorChangerBtn.addEventListener('click', () => {
  colorValueEl.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
  document.body.style.transition = 'background-color 450ms';
})