
const str = "hello";          // string
const num = 42;               // number
const bool = true;            // boolean
const n = null;               // null (special type)
const u = undefined;          // undefined

console.log('typeof str:', typeof str);       // string
console.log('typeof num:', typeof num);       // number
console.log('typeof bool:', typeof bool);     // boolean
console.log('typeof n:', typeof n);           // object (this is a well-known JS quirk)
console.log('typeof u:', typeof u);           // undefined




console.log('Boolean("hello"):', Boolean(str));   // true – a non-empty string is always truthy
console.log('Number("hello"):', Number(str));     // NaN – the string cannot be parsed as a number
console.log('String("hello"):', String(str));     // "hello" – a string stays a string

console.log('Boolean(42):', Boolean(num));        // true – any number except 0 is truthy
console.log('Number(42):', Number(num));          // 42 – a number remains unchanged
console.log('String(42):', String(num));          // "42" – the number becomes a string

console.log('Boolean(true):', Boolean(bool));     // true – stays true
console.log('Number(true):', Number(bool));       // 1 – true converts to 1
console.log('String(true):', String(bool));       // "true" – the string "true"

console.log('Boolean(null):', Boolean(n));        // false – null is falsy
console.log('Number(null):', Number(n));          // 0 – null becomes 0 when converted to number
console.log('String(null):', String(n));          // "null" – the string "null"

console.log('Boolean(undefined):', Boolean(u));   // false – undefined is always falsy
console.log('Number(undefined):', Number(u));     // NaN – undefined cannot be represented as a number
console.log('String(undefined):', String(u));     // "undefined" – the string "undefined"





const student = {
  name: 'Anna',
  age: 20,
  city: 'Baku',
  isStudent: true
};

console.log('Using dot notation:');
console.log('name:', student.name);           // Anna
console.log('age:', student.age);             // 20
console.log('city:', student.city);           // Baku
console.log('isStudent:', student.isStudent); // true

console.log('Using bracket notation:');
console.log('name:', student['name']);           // Anna
console.log('age:', student['age']);             // 20
console.log('city:', student['city']);           // Baku
console.log('isStudent:', student['isStudent']); // true

student.city = 'London';


student.course = 2;



console.log('Final object:', student,`\n\n`);
// { name: 'Anna', age: 20, city: 'London', isStudent: true, course: 2 }








function greetDeclaration(name) {
  console.log(`Hello, ${name}!\n\n`);
}

const greetExpression = function(name) {
  console.log(`Hello, ${name}!\n\n`);
};

const greetArrow = (name) => {
  console.log(`Hello, ${name}!\n\n`);
};

greetDeclaration('Yahya');   // Hello, Yahya!
greetExpression('Farhad');   // Hello, Farhad!
greetArrow('Kamran');        // Hello, Kamran!











function makeCounter() {
  
    let count = 0; 

  return function() {
    count = count + 1;   
    console.log(count);
  };

}




const counter1 = makeCounter();
const counter2 = makeCounter();

console.log('Counter 1:');
counter1(); // 1
counter1(); // 2
counter1(); // 3

console.log('Counter 2:');
counter2(); // 1
counter2(); // 2

console.log('Counter 1 again:');
counter1(); 







function introduce(name = "N/A", age = 0, city = "N/A") {
  console.log(`My name is ${name}, I'm ${age}, I'm from ${city}\n\n`);
}

introduce();                       // My name is N/A, I'm 0, I'm from N/A


introduce('Yahya');                // My name is Yahya, I'm 0, I'm from N/A


introduce('Kamran', 25, 'Baku');   // My name is Kamran, I'm 25, I'm from Baku