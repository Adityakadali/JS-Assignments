// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=

let data = document.querySelector(".data");

let btn = document.querySelector(".submit");

let qr = document.querySelector("#img");

btn.addEventListener("click", () => {
    console.log("clocke")
    let val = data.value;
    console.log(val)
    qr.setAttribute("src", `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${val}`)
})