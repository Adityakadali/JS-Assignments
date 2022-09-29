const total = document.getElementById("total");
const form = document.getElementById("input-form");
const submits = document.querySelector(".submit-btn");

let update = () => {
  let name = form.querySelector("#details").value;
  let price = form.querySelector("#amount").value;
  console.log(name, price);
};

submits.addEventListener("click", update);
