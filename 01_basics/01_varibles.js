const  accountId = 123456;
let accountEmail = "chst@example.com"; 
var accountPassword = "12345";
accountCity = "New York"; // Implicit global variable (not recommended)



accountEmail="teja@example.com"
accountPassword="54321"
accountCity="Los Angeles"
/*
Prefer not to use var beacause of its issue in its function scope and can lead to unexpected behaviors.
Use let and const for block scope variables.

*/
console.table({ accountEmail, accountCity, accountId, accountPassword }); 