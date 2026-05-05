const shopProducts = [
  { id: 1, name: "Smartphone", price: 799, inStock: true },
  { id: 2, name: "Laptop", price: 1299, inStock: true },
  { id: 3, name: "Tablet", price: 499, inStock: false },
  { id: 4, name: "Headphones", price: 199, inStock: true },
  { id: 5, name: "Smartwatch", price: 299, inStock: true },
  { id: 6, name: "Keyboard", price: 99, inStock: true },
  { id: 7, name: "Mouse", price: 49, inStock: true },
  { id: 8, name: "Monitor", price: 349, inStock: false },
  { id: 9, name: "Printer", price: 159, inStock: true },
  { id: 10, name: "Speakers", price: 129, inStock: true },
  { id: 11, name: "Webcam", price: 89, inStock: true },
  { id: 12, name: "Microphone", price: 149, inStock: false },
  { id: 13, name: "Hard Drive", price: 119, inStock: true },
  { id: 14, name: "SSD Drive", price: 179, inStock: true },
  { id: 15, name: "Router", price: 99, inStock: true },
  { id: 16, name: "USB Flash Drive", price: 29, inStock: true },
  { id: 17, name: "Graphics Tablet", price: 249, inStock: false },
  { id: 18, name: "Game Console", price: 499, inStock: true },
  { id: 19, name: "Projector", price: 699, inStock: true },
  { id: 20, name: "Scanner", price: 139, inStock: false },
];

let bags = [];

const shopList = document.querySelector("#products-list");
const bagList = document.querySelector("#bag-list");
const searchForm = document.querySelector("#search-form");
const homeLink = document.querySelector("#home-link");
const bagLink = document.querySelector("#bag-link");
const productPage = document.querySelector("#products-page");
const bagPage = document.querySelector("#bag-page");
const bagTotalEl = document.querySelector("#bag-total");
const bagSearchInput = document.querySelector("#bag-search");
const clearBagBtn = document.querySelector("#clear-bag-btn");
const bagCountSpan = document.querySelector("#bag-count");

homeLink.addEventListener("click", () => {
  productPage.style.display = "block";
  bagPage.style.display = "none";
});

bagLink.addEventListener("click", () => {
  productPage.style.display = "none";
  bagPage.style.display = "block";
  drawBag(bags);
});

function addToBag(id) {
  const product = shopProducts.find((item) => item.id === id);
  if (!product) return;

  if (!product.inStock) {
    alert("Out of stock");   
    return;
  }

  const bagItem = bags.find((item) => item.id === product.id);
  if (bagItem) {
    bagItem.count += 1;
  } else {
    bags.push({
      id: product.id,
      name: product.name,
      price: product.price,
      count: 1,
    });
  }

  updateBagCount();
}

function drawBag(arr) {
  bagList.innerHTML = arr
    .map((item) => {
      return `
        <li>
          <span class="bag-item-name">${item.name}</span>
          <span class="bag-item-price">$${item.price}</span>
          <span class="bag-item-count">
            <button onclick="decreaseCount(${item.id})">−</button>
            ${item.count}
            <button onclick="increaseCount(${item.id})">+</button>
          </span>
          <button class="remove-btn" onclick="removeFromBag(${item.id})">Remove</button>
        </li>
      `;
    })
    .join("");

  const total = getTotal();
  bagTotalEl.textContent = `Total: $${total}`;
  updateBagCount();
}

function removeFromBag(id) {
  bags = bags.filter((item) => item.id !== id);
  drawBag(bags);
}

function increaseCount(id) {
  const bagItem = bags.find((item) => item.id === id);
  if (bagItem) {
    bagItem.count += 1;
    drawBag(bags);
  }
}

function decreaseCount(id) {
  const bagItem = bags.find((item) => item.id === id);
  if (bagItem) {
    bagItem.count -= 1;
    if (bagItem.count <= 0) {
      bags = bags.filter((item) => item.id !== id);
    }
    drawBag(bags);
  }
}

function getTotal() {
  return bags.reduce((sum, item) => sum + item.price * item.count, 0);
}

clearBagBtn.addEventListener("click", () => {
  bags = [];
  drawBag(bags);
});

bagSearchInput.addEventListener("input", (ev) => {
  const query = ev.target.value.toLowerCase();
  const filtered = bags.filter((item) =>
    item.name.toLowerCase().startsWith(query)
  );
  drawBag(filtered);
});

function updateBagCount() {
  const totalItems = bags.reduce((sum, item) => sum + item.count, 0);
  bagCountSpan.textContent = totalItems;
}

function drawProducts(arr) {
  shopList.innerHTML = arr
    .map((item) => {
      return `
        <li>
          <div class="product-title">${item.name}</div>
          <div class="product-price">$${item.price}</div>
          <div class="product-stock">${item.inStock ? "In stock" : "Out of stock"}</div>
          <button onclick="addToBag(${item.id})" class="add-to-bag-btn">ADD TO BAG</button>
        </li>
      `;
    })
    .join("");
}

drawProducts(shopProducts);

searchForm.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const formData = new FormData(ev.target);
  const searchValue = formData.get("search").trim().toLowerCase();
  const filtredArr = shopProducts.filter((item) =>
    item.name.toLowerCase().startsWith(searchValue)
  );
  drawProducts(filtredArr);
});