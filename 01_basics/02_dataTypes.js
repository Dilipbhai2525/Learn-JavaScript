"use stict"; // treat all Js code as newer version

// alert("hello world"); // we are using node.js, not browser

// console.log(3+3); console.log("hello");  // notrecommended to use console.log in production code

let name = "dilip";
let age = 25;
let isLoggedIn = true;
let state = null;
let symbol = Symbol("unique");
let undef;
let big = 123456789123456789123456789n;


// string => ""
// symbol => unique identifier
// bigint 
// boolean => true/false
// number => 2 to power 53
// null => empty value
// undefined => variable is declared but not assigned value

// object
let user = {
  name: "dilip",
  symbol: Symbol("unique"),
  age: 25,
  state: null,
  isLoggedIn: true,
  big: 123456789123456789123456789n,
  undef: undefined
};

console.log(typeof name);
console.log(typeof symbol);
console.log(typeof age);
console.log(typeof state);
console.log(typeof isLoggedIn);
console.log(typeof big);
console.log(typeof undef);

console.log(typeof user);
