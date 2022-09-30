let obj = [
  {
    name: "Salary",
    amount: "5000",
    type: "income",
  },
  {
    name: "stocks",
    amount: "5000",
    type: "income",
  },
];

let inc = obj.reduce((a, b) => a + parseInt(b.amount), 0);

obj.forEach((e) => console.log(parseInt(e["amount"])));

console.log(inc);
