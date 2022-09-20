let url = document.getElementById("url");
let name = document.getElementById("name");
let tag = document.getElementById("tags");

let data = document.querySelector(".data");

function save() {
    let data = {
        'url': url.value,
        'tags': tag.value.split(",")
    }
    console.log(data, name.value)
    localStorage.setItem( name.value, JSON.stringify(data))
}

for (let i = 0; i < localStorage.length; i++) {
    let website = localStorage.key(i);
    let websiteData = JSON.parse(localStorage.getItem(website))
    let bookmark = document.createElement("a");
    bookmark.setAttribute("href", websiteData["url"])
    bookmark.innerText = website;
    data.appendChild(bookmark)
}