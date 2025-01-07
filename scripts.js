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

// CATEGORY SLIDER
const [leftArrowButton, rightArrowButton] = [
  document.getElementById("category-slide-left"),
  document.getElementById("category-slide-right"),
];

const categoriesContainer = document.querySelector(".category-slide");

leftArrowButton.addEventListener("click", () => {
  categoriesContainer.scrollLeft -= 300;
});

rightArrowButton.addEventListener("click", () => {
  categoriesContainer.scrollLeft += 300;
});

const deptList = document.getElementById("dept-list");
const categories = [
  "Fashion",
  "Education Product",
  "Frozen Food",
  "Beverages",
  "Organic Grocery",
  "Office Supplies",
  "Beauty Products",
  "Books",
  "Electronics & Gadget",
  "Travel Accessories",
  "Fitness",
  "Sneakers",
  "Toys",
  "Furniture",
];

const formattedDeps = categories
  .map(
    (category) =>
      `<li><a href="/products" class="hover:border-gray-400 duration-300 border-b border-transparent capitalize w-fit">${category}</a></li>`
  )
  .join("\n");

deptList.innerHTML = formattedDeps;

const generateSlug = (str) =>
  str
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s]/g, "")
    .trim()
    .replace(/\s+/g, "-");

const formattedAbout = [
  "About shopcart",
  "Careers",
  "News & Blog",
  "Help",
  "Press Center",
  "Shop by location",
  "Shopcart brands",
  "Affiliate & Partners",
  "Ideas & Guides",
]
  .map(
    (item) =>
      `<li><a href="/${generateSlug(
        item
      )}" class="hover:border-gray-400 duration-300 border-b border-transparent capitalize w-fit">${item}</a></li>`
  )
  .join("\n");
document.getElementById("about-list").innerHTML = formattedAbout;

const formattedService = ["Gift Card", "Mobile App", "Shipping & Delivery", "Order Pickup", "Account Signup"]
  .map(
    (item) =>
      `<li><a href="/${generateSlug(
        item
      )}" class="hover:border-gray-400 duration-300 border-b border-transparent capitalize w-fit">${item}</a></li>`
  )
  .join("\n");
document.getElementById("services-list").innerHTML = formattedService;

const formattedHelp = ["Shopcart Help", "Returns", "track orders", "contact us", "feedback", "Security & Fraud"]
  .map(
    (item) =>
      `<li><a href="/${generateSlug(
        item
      )}" class="hover:border-gray-400 duration-300 border-b border-transparent capitalize w-fit">${item}</a></li>`
  )
  .join("\n");
document.getElementById("help-list").innerHTML = formattedHelp;
