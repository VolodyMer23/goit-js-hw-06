const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const {
    elements: { email, password }
  } = e.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Та цеж не діло, заповніть всі поля :)");
  }

  console.log(`Login: ${email.value}, Password: ${password.value}`);
  e.currentTarget.reset();
}
