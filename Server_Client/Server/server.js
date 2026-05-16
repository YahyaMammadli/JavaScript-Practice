const express = require('express');
const cors = require('cors');
require('dotenv').config();
 
const app = express();
const PORT = process.env.PORT || 5000;
 
app.use(cors());
app.use(express.json());
 
let products = [
  { id: 1, name: "iPhone 15", price: 89999, category: "Smartphones", description: "Flagship from Apple" },
  { id: 2, name: "Samsung Galaxy S24", price: 74999, category: "Smartphones", description: "Android flagship" },
  { id: 3, name: "MacBook Air M3", price: 129999, category: "Laptops", description: "Light and powerful" },
  { id: 4, name: "iPhone 15 Pro", price: 119999, category: "Smartphones", description: "Professional model with titanium body" },
  { id: 5, name: "iPhone 16", price: 99999, category: "Smartphones", description: "The latest Apple flagship" },
  { id: 6, name: "Samsung Galaxy S24 Ultra", price: 124999, category: "Smartphones", description: "Flagship with S Pen and the best camera" },
  { id: 7, name: "Samsung Galaxy A55", price: 44999, category: "Smartphones", description: "Great mid-ranger with IP67 protection" },
  { id: 8, name: "Google Pixel 8a", price: 49999, category: "Smartphones", description: "Pure Android and excellent camera" },
  { id: 9, name: "Google Pixel 9 Pro", price: 109999, category: "Smartphones", description: "AI features and top-tier photography" },
  { id: 10, name: "Xiaomi 14T Pro", price: 59999, category: "Smartphones", description: "Powerful processor and fast charging" },
  { id: 11, name: "Redmi Note 13 Pro+", price: 32999, category: "Smartphones", description: "Best choice under 35,000" },
  { id: 12, name: "OnePlus 12R", price: 54999, category: "Smartphones", description: "Ultra-fast charging and smooth display" },
  { id: 13, name: "Nothing Phone (2a)", price: 37999, category: "Smartphones", description: "Stylish design with Glyph interface" },
  { id: 14, name: "MacBook Pro 14 M4", price: 189999, category: "Laptops", description: "Powerful laptop for professionals" },
  { id: 15, name: "MacBook Air M2", price: 89999, category: "Laptops", description: "Thin and lightweight ultrabook" },
  { id: 16, name: "Dell XPS 14", price: 149999, category: "Laptops", description: "Premium Windows laptop" },
  { id: 17, name: "Lenovo ThinkPad X1 Carbon", price: 134999, category: "Laptops", description: "Business-class with the best keyboard" },
  { id: 18, name: "ASUS Zenbook 14 OLED", price: 89999, category: "Laptops", description: "Bright OLED screen and lightweight body" },
  { id: 19, name: "HP Spectre x360 14", price: 109999, category: "Laptops", description: "Stylish 2-in-1 convertible" },
  { id: 20, name: "Lenovo Legion 5 Pro", price: 124999, category: "Laptops", description: "Gaming laptop with powerful graphics" },
  { id: 21, name: "ASUS ROG Strix G16", price: 139999, category: "Laptops", description: "Powerful gaming laptop" },
  { id: 22, name: "Acer Swift Go 14", price: 64999, category: "Laptops", description: "Lightweight and long-lasting ultrabook" },
  { id: 23, name: "Dell Inspiron 16 Plus", price: 79999, category: "Laptops", description: "Large screen and solid performance" }
];
 
const generateId = () => Math.max(0, ...products.map(p => p.id)) + 1;
 
 
app.get('/products', (req, res) => {
  const { search, category, minPrice, maxPrice } = req.query;
 
  let filtered = [...products];
 
  if (search) {
    const s = search.toLowerCase();
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(s) ||
      (p.description && p.description.toLowerCase().includes(s))
    );
  }
 
  if (category) {
    filtered = filtered.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }
 
  if (minPrice) {
    filtered = filtered.filter(p => p.price >= Number(minPrice));
  }
  if (maxPrice) {
    filtered = filtered.filter(p => p.price <= Number(maxPrice));
  }
 
  res.json({
    success: true,
    count: filtered.length,
    products: filtered
  });
});
 
app.get('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
 
  if (!product) {
    return res.status(404).json({ success: false, message: 'Товар не найден' });
  }
 
  res.json({ success: true, product });
});
 
app.post('/products', (req, res) => {
  const { name, price, category, description } = req.body;
 
  if (!name || !price) {
    return res.status(400).json({ success: false, message: 'Необходимо указать name и price' });
  }
 
  const newProduct = {
    id: generateId(),
    name,
    price: Number(price),
    category: category || 'Без категории',
    description: description || ''
  };
 
  products.push(newProduct);
  res.status(201).json({ success: true, product: newProduct });
});
 
app.put('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);
 
  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Товар не найден' });
  }
 
  products[index] = {
    ...products[index],
    ...req.body,
    id: products[index].id 
  };
 
  res.json({ success: true, product: products[index] });
});
 
app.patch('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);
 
  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Товар не найден' });
  }
 
  products[index] = { ...products[index], ...req.body };
  res.json({ success: true, product: products[index] });
});
 
app.delete('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);
 
  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Товар не найден' });
  }
 
  const deleted = products.splice(index, 1);
  res.json({ success: true, message: 'Товар удалён', product: deleted[0] });
});
 
 
app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен: http://localhost:${PORT}`);
  console.log('📦 CRUD + поиск товаров готовы!');
});