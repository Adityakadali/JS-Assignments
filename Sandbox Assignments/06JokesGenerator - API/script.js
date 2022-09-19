const url = "https://icanhazdadjoke.com/";
const siteHeaders = { Accept: "application/json"};

let joke = () => {
    fetch(url, { headers: siteHeaders}).
    then(r => r.json()).
    then(data => {
        document.querySelector(".joke").innerHTML = `${data["joke"]}`
    }).catch();
}

joke();

let jokebtn = document.querySelector("#jokeBtn");

jokebtn.addEventListener("click", () => joke())
