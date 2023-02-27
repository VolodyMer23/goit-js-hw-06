const counterValueEl = document.querySelector("#value");
let counterValue = 0;

const incrBtn = document.querySelector('[data-action="increment"]');
incrBtn.addEventListener("click", () => {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
});

const decrBtn = document.querySelector('[data-action="decrement"]');
decrBtn.addEventListener("click", () => {
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
});
