const shopList = document.querySelector("#shopList");
const searchInput = document.querySelector("#search");
const categorySelect = document.querySelector("#category-select");
const minMaxForm = document.querySelector("#min-max-form");
const productIdInput = document.querySelector("#product-id");
const fetchSingleBtn = document.querySelector("#fetch-single");

const currentFilters = {
  search: "",
  category: "",
  minPrice: "",
  maxPrice: "",
};

function drawProduct(product) {
   console.log('Product object:', product);
  const productItem = document.createElement("li");
  productItem.innerHTML = `
    <p><strong>${product.name || "No name"}</strong></p>
    <p>${product.description || ""}</p>
    <p>Price: ${product.price ?? "N/A"} $</p>
    <p>Category: ${product.category || "N/A"}</p>
  `;
  shopList.appendChild(productItem);
}

function drawGoods(arr) {
  shopList.innerHTML = "";
  if (!arr || arr.length === 0) {
    shopList.innerHTML = "<li>No products found.</li>";
    return;
  }
  arr.forEach((element) => drawProduct(element));
}

async function fetchProducts(params = {}) {
  try {
    let url = "http://localhost:5000/products";
    let query = [];

    if (params.id) {
      url += `/${encodeURIComponent(params.id)}`;
    } else {
      if (params.search) query.push(`search=${encodeURIComponent(params.search)}`);
      if (params.category) query.push(`category=${encodeURIComponent(params.category)}`);
      if (params.minPrice !== undefined && params.minPrice !== '') {
        query.push(`minPrice=${encodeURIComponent(params.minPrice)}`);
      }
      if (params.maxPrice !== undefined && params.maxPrice !== '') {
        query.push(`maxPrice=${encodeURIComponent(params.maxPrice)}`);
      }
      if (query.length) url += "?" + query.join("&");
    }

    const response = await fetch(url, { method: "GET" });
    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }
    const data = await response.json();

    shopList.innerHTML = "";

    if (params.id) {
      const product = data.product || data.data || data;
      if (product && product.name) {
        drawProduct(product);
      } else {
        shopList.innerHTML = "<li>Product not found or invalid data.</li>";
      }
    } else {
      const products = data.products || data;
      if (Array.isArray(products)) {
        drawGoods(products);
      } else {
        shopList.innerHTML = "<li>Invalid response format.</li>";
      }
    }
  } catch (err) {
    console.error("Fetch error:", err);
    shopList.innerHTML = `<li>Error loading data: ${err.message}</li>`;
  }
}

function applyFilters() {
  const activeFilters = {};
  if (currentFilters.search) activeFilters.search = currentFilters.search;
  if (currentFilters.category) activeFilters.category = currentFilters.category;
  if (currentFilters.minPrice) activeFilters.minPrice = currentFilters.minPrice;
  if (currentFilters.maxPrice) activeFilters.maxPrice = currentFilters.maxPrice;
  fetchProducts(activeFilters);
}

function resetFilters() {
  currentFilters.search = "";
  currentFilters.category = "";
  currentFilters.minPrice = "";
  currentFilters.maxPrice = "";
  searchInput.value = "";
  categorySelect.value = "";
  minMaxForm.reset();
  applyFilters();
}

searchInput.addEventListener("input", (ev) => {
  currentFilters.search = ev.target.value.trim();
  applyFilters();
});

categorySelect.addEventListener("change", (ev) => {
  currentFilters.category = ev.target.value;
  applyFilters();
});

minMaxForm.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const formData = new FormData(ev.target);
  let { min, max } = Object.fromEntries([...formData]);
  currentFilters.minPrice = min;
  currentFilters.maxPrice = max;
  applyFilters();
});

fetchSingleBtn.addEventListener("click", () => {
  const id = productIdInput.value.trim();
  if (id) {
    fetchProducts({ id: id });
  }
});

const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset Filters";
resetBtn.type = "button";
resetBtn.className = "reset-btn";
resetBtn.addEventListener("click", resetFilters);
document.querySelector(".filters").appendChild(resetBtn);

applyFilters();