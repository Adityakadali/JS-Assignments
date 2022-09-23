const principal = document.querySelector("#amount");
const intrestRate = document.querySelector("#intrest");
const time = document.querySelector("#time");
const emi = document.querySelector("#emi");
const intrestPay = document.querySelector("#payIntrest");
const total = document.querySelector("#total");

// EMI = P * R * [ (1+R)^N / [(1+R)^N -1 ]

function caliculate() {
    let P = parseInt(principal.value);
    let R = ( parseInt(intrestRate.value) / 12 ) / 100; // converting annual intrest to monthly intrest
    let N = parseInt(time.value)*12;
    let Q = Math.pow((1 + R), N);
    let E = P * R * Q / (Q-1);
    emi.innerText = Math.round(E);
    intrestPay.innerText = Math.round((E * N) - P);
    total.innerText = Math.round(E * N);
}