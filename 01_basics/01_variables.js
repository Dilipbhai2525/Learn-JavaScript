const accountId = 144553;
let accountEmail = 'dilip@test.com';
var accountPassword = '123456';
accountCity = 'jaipur';
accountAge = 25;
let accountState;

/*
Prefer not to use var
becouse of issue in block scope and function scope.
Use let and const variables instead.
const is used for variables that should not change.
let is used for variables that can change.
*/

// accountId = 2; // not allowed
accountEmail = 'cd@test.com';
accountCity = 'delhi';


console.log(accountId);
console.log(accountEmail);

console.table({accountId, accountEmail, accountPassword, accountCity, accountAge, accountState});
