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
console.log(typeof id); // "Symbol"

