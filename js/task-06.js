const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", (e) => {
  if (e.target.value.length <= 6) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
  
});


