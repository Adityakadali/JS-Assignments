let values = "0123456789ABCDEF";

let randomHex = () => {
    let hex = "#";
    for ( let i = 0; i < 6; i++){
        hex = hex + values[Math.round(Math.random()*16)];
    };
    return hex;
}

let canvas = document.querySelector("#canvas");

let btn = document.querySelector("#button");

btn.addEventListener("click", () => {
    canvas.style.backgroundColor = randomHex();
})


