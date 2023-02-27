const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredListEl = document.querySelector("#ingredients");

const items = ingredients.map((ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("list");
  const itemTitleEl = document.createElement("p");
  itemTitleEl.textContent = ingredient;
  itemEl.appendChild(itemTitleEl);
  return itemEl;
});

ingredListEl.append(...items);
