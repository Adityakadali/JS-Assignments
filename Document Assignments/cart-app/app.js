const productContainer = document.querySelector(".product-group");

let cart = [];

let data = fetch("./data.json")
  .then((response) => response.json())
  .then((r) => {
    return r["products"];
  })
  .then((products) => {
    products.forEach((product) => {
      //build a card
      let productCard = document.createElement("div");
      productCard.className = "product";
      productCard.setAttribute("id", `${product.id}`);

      productCard.innerHTML = `
                        <img src=${product.image} class="product-image" alt="" srcset="">
                        <h2 class="title">${product.item}</h2>
                        <p class="price">Rs. <span id="price">${product.price}</span> </p>
                        <div class="input-group">
                            <input id="quantity" type="number" min="0" value="0">
                        </div>
                        <button class="cart" data-product="${product.id}">add to cart</button>
                    `;
      productContainer.appendChild(productCard);
    });
  });

productContainer.addEventListener("click", (e) => {
  if (e.target && e.target.matches("button.cart")) {
    let btn = e.target;
    let productID = btn.dataset["product"];
    let itemCard = document.getElementById(productID);
    let itemPrice = parseInt(itemCard.querySelector("#price").innerText);
    let itemQuantity = parseInt(itemCard.querySelector("#quantity").value);
    if (itemQuantity) {
      cart.push({
        id: productID,
        price: itemQuantity * itemPrice,
      });
      document.querySelector("#item-count").innerText = cart.length;
      let total = 0;
      cart.forEach((e) => {
        total = total + parseInt(e["price"]);
      });
      document.querySelector("#total").innerText = total;
    }
  }
});
