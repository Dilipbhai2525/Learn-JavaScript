// let score = 33;
// let score = "33";
let score = "33abc";
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// NaN is special Type in JavaScript
console.log(isNaN(valueInNumber)); // true if valueInNumber is NaN

// "33" => convert to number 33
// "33abc" => convert to NaN
// "abc" => convert to NaN

// let isLoggedIn = 1;
// let isLoggedIn = 0;
// let isLoggedIn = "";
// let isLoggedIn;
let isLoggedIn = "dilip";

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true
// 0 => false
// sting => true
// emty => false
// null => false

let someNumber = 33;
let numis = String(someNumber);
console.log(numis);
console.log(typeof numis);


// ********************************* Operations *********************************
let value = 3;
let negValue = -3;
console.log(negValue);

let str1 = "dilip"
let str2 = " kumar"
let fullName = str1 + str2
console.log(fullName);

console.log(1 + "2");
console.log("1" + 2);
console.log(1 + 2 + "3");
console.log(1 + "2" + 3);
console.log((1 + 2) * 3 / 3);

// link to study: 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
//mdn prefix and postfix js

