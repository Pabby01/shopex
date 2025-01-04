let cart = [];

function addToCart(productName, price) {
  const cartItem = { name: productName, price: price };
  cart.push(cartItem);
  updateCartUI();
}

function updateCartUI() {
  const cartItemsList = document.getElementById("cart-items");
  const totalPriceElement = document.getElementById("total-price");

  cartItemsList.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItemsList.appendChild(listItem);
    total += item.price;
  });

  totalPriceElement.textContent = `Total: $${total.toFixed(2)}`;
}
