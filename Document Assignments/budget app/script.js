const total = document.getElementById("total");
const form = document.getElementById("input-form");
const submits = document.querySelector(".submit-btn");
const incomeTable = document.querySelector("#income-body");
const expenseTable = document.querySelector("#expense-body");

submits.addEventListener("click", update);

let income = [];
let expense = [];

function update() {
  let formName = form.querySelector("#details").value;
  let formAmount = form.querySelector("#amount").value;
  let formType = form.querySelector("#type").value;
  let tr = document.createElement("tr");
  let obj = {
    name: formName,
    amount: formAmount,
    type: formType,
  };
  tr.innerHTML = buildRow(formName, formAmount, formType);
  if (formType == "income") {
    incomeTable.appendChild(tr);
    income.push(obj);
  } else if (formType == "expense") {
    expenseTable.appendChild(tr);
    expense.push(obj);
  }
  clearForm();
  updateTotal();
}

// Clears input form

function clearForm() {
  form.querySelector("#details").value = "";
  form.querySelector("#amount").value = "";
  form.querySelector("#type").value = "income";
}

// returns table row innerHTML

function buildRow(name, amount, type) {
  let innerHTML = `
  <td>${name}</td>
  <td>${amount}</td>
  <td>${type}</td>`;
  return innerHTML;
}

function updateTotal() {
  let inc = income.reduce((a, b) => a + parseInt(b.amount), 0);
  let exp = expense.reduce((a, b) => a + parseInt(b.amount), 0);
  total.innerText = inc - exp;
}

updateTotal();
