# DOM Assignments

## 1. Webiste Name: [Dev To](https://dev.to/)

### Topics

> Query Selctor, Inner HTML

```JS
let card = document.querySelector("aside > .crayons-card");

card.querySelector("h2").innerHTML = "Aditya Kadali";

card.querySelector("p").innerHTML = "I love building websites";
```

![before](./images/dev.to.png)

![screenshot](./images/dev.to_.png)

## 2. Website Name: [Apple](https://support.apple.com/en-in)

**Task**

> Fetch all the product name and store in an array

```JS
let products = document.querySelectorAll(".as-imagegrid-item-title");
let items = [];

products.forEach( e => {
    items.push(e.innerText.slice(0,-8));
})

console.log(items)
```
![output](./images/apple.png)


## 3. Webiste Name: [Youtube Support](https://support.google.com/youtube/)

### Topics

> Get Element By Id, Create Element, Create Text Node, Append Child

```JS
let accordion = document.querySelector(".accordion-homepage");
let myContent = document.createElement("section");
myContent.classList.add("parent");
myContent.innerHTML = `<h3>My new FAQ</h3>`;
accordion.appendChild(myContent);
```
![accordion](./images/youtube.png)

## 4. Webiste Name: [OnePlus](https://www.oneplus.in/support)

### Topics

> Query Selector, InnerText

```JS
let ph = document.querySelector(".service-number");
ph.innerText = "+91-9912345678";
```

![output](./images/op-ph.png)

## 5. Webiste Name: [Samsung](https://www.samsung.com/in/offer/online/samsung-fest/)

### Topics

> getElementById, createElement, InnerText, append, setAttribute

### Tasks

- Target the main div of card and change the Button text to Check out

```JS
let card = document.querySelectorAll(".feature-column-carousel__feature")[0];

card.querySelector(".cta").innerText = "Check out";
```

![samsung](./images/samsung.png)

## 6. Webiste Name: [Adidas](https://www.adidas.co.in/)

### Topics

> Query Selector, Event listeners, Changing Styles

### Tasks

- Target the search box and on hover change thebackground color to red.

```JS
let search = document.querySelector('[aria-label="Search"]');

search.addEventListener('mouseover', () => {
    search.style.backgroundColor = "Red";
})

search.addEventListener('mouseout', () => {
    search.style.backgroundColor = "white";
})
```

![adidas](./images/adidas.png)

## 7. Webiste Name: [MDN Web Docs](https://developer.mozilla.org/en-US/)

### Topics

> Form, Value, Submit

```JS 
let form = document.getElementById("hp-search-form");

form.querySelector("input").value = "CSS Selector";

form.submit();
```

![output](./images/mdndocs.png)
