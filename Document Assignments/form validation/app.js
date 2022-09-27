const form = document.querySelector("#form");
const names = document.querySelector("#name");
const email = document.querySelector("#email");
const mobile = document.querySelector("#mobile");
const password = document.querySelector("#password");
const cPassword = document.querySelector("#confirm");
const gender = document.querySelectorAll("[name='gender']");
const terms = document.getElementById("terms");
const submit = document.getElementById("submit");
const error = document.querySelector(".error");

terms.addEventListener("change", () => {
  if (terms.checked) {
    submit.removeAttribute("disabled");
  } else {
    submit.setAttribute("disabled", true);
  }
});

form.addEventListener("submit", (e) => {
  let err = [];

  //Mobile number check
  if (mobile.value !== "") {
    let pattern = /^[6-9][0-9]{9}$/;
    if (!pattern.test(mobile.value)) {
      err.push("Enter a valid number");
    }
  }

  if (password.value !== "") {
    let pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    if (!pattern.test(password.value)) {
      err.push("Password must contain Uppercase, lowercase, alphanumaric");
    }
  }

  if (password.value !== cPassword.value) {
    err.push("Passwords doesn't match");
  }

  console.log(err);
  // Showing errors
  if (err.length > 0) {
    error.innerText = err.join(", ");
    e.preventDefault();
  }
});
