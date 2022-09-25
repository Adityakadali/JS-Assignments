const hrs = document.querySelector("#hrs");
const mins = document.querySelector("#mins");
const sec = document.querySelector("#sec");
let seconds = 0;
let miniutes = 0;
let hours = 0;
//buttons
const startBtn = document.querySelector("[aria-label='start']");
const pauseBtn = document.querySelector("[aria-label='pause']");
const resetBtn = document.querySelector("[aria-label='reset']");

startBtn.addEventListener("click", ()=> start());
pauseBtn.addEventListener("click", ()=> pause());
resetBtn.addEventListener("click", ()=> reset());

function count() {
    seconds++;
    if (seconds == 59) {
        seconds = -1;
        miniutes++;
    };
    if (miniutes == 59) {
        miniutes = -1;
        hours++
    }
    sec.innerText = seconds;
    mins.innerText = miniutes;
    hrs.innerText = hours;

}

let set //variable to store the time

function start() {
    clearInterval(set);
    set = setInterval(count, 10);
}

function pause() {
    clearInterval(set);
}

function reset() {
    clearInterval(set);
    seconds = 0;
    miniutes = 0;
    hours = 0;
    sec.innerText = "00";
    mins.innerText = "00";
    hrs.innerText = "00";
}