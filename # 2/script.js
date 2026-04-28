
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    color: "blue",
    isElectric: false,
};

console.log("Original object car:");
for (const key in car) {
    console.log(`${key}: ${car[key]}`);
}

delete car.isElectric;
console.log("After delete isElectric:", car);








const user = {
    name: "Kamran",
    age: 25,
    city: "Baku",
    job: "Software Engineer",
};

const { name, age, city, job } = user;
console.log("Destructured variables:");
console.log("name:", name);
console.log("age:", age);
console.log("city:", city);
console.log("job:", job);

const userCopy = { ...user, city: "Sumqayit" };

console.log("Original user:", user);
console.log("User copy (city updated):", userCopy);
console.log("The original has NOT changed:", user.city === "Baku");


const defaults = {
    theme: "light",
    language: "ru",
    fontSize: 14,
};

const userSettings = {
    theme: "dark",
    fontSize: 18,
};

const merged = Object.assign({}, defaults, userSettings);

console.log("Result of joining through Object.assign:");
Object.entries(merged).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});


const countries = new Map([
    ["Azerbaijan", "Baku"],
    ["France", "Paris"],
    ["Japan", "Tokio"],
    ["USA", "Washington"],
]);

countries.forEach((capital, country) => {
    console.log(`${country} → ${capital}`);
});

countries.set("Italy", "Rome");
console.log("Capital of Japan (get):", countries.get("Japan"));

countries.delete("France");

console.log("Final size of the Map:", countries.size);