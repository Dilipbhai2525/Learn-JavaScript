// primitive data types
const name = "John"; // string
const age = 30; // number
const isEmployed = true; // boolean
const salary = null; // null
const address = undefined; // undefined
const uniqueId = Symbol("id"); // symbol
const bigIntValue = BigInt(12345678901234567890); // bigint

// nn ss bb u  // null, number, string, symbol, boolean, bigint, undefined

// non premitive data types  // reference types
const person = {
  name: "Jane",
  age: 25,
  isEmployed: false,
  address: {
    city: "New York",
    zipCode: "10001"
  }};                 // object

const numbersArray = [1, 2, 3, 4, 5]; // array (which is a type of array object)

function greet() { 
  console.log("Hello, World!");
}          // function (which is also a type of function object)

const myfunction = function(){
  console.log("Hello, World!");
}

// JavaScript is dynamically typed, meaning variables can hold any type of data and can change types at runtime.
// Example of dynamic typing


const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId); // false, because each Symbol is unique

// typeof operator can be used to check the type of a variable
// console.log(typeof id); // "Symbol"


// ******************************************************************************

// Stack (primitive), Heap (Non-Primitive)

// Stack use thaay etle ek copy male 
//Heap use thaay etle reference

let myYoutubeName = "dilipChaudhary"; // Stack memory
let user = {
  name : 'haresh',
  age : 25,
  city : 'delhi'
};    // Heap Memory

// Memory is Stack example
let myuser = "dilip";

let userOne = myuser; // Stack memory, userOne is a copy of myuser
userOne = "hitesh";

console.log(userOne); // "hitesh"
console.log(myuser); // "dilip"

// Memory is Heap example
let two = {
  email : "hc@gmail.com",
  age : 30
};

let three = two;
three.email = "dilip@gmail.com";

console.log(two.email);
console.log(three.email);





