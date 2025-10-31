"use strict"; //treat all JS code as newer version of JS


// alert("Hello World"); //we are using nodejs not browser

//int ->2 power 53
//bigint -> larger than 2 power 53
//null -> empty value/standalone value
//undefined -> value not assigned
//boolean -> true/false
//string -> sequence of characters
//symbol -> unique identifiers
//object -> key value pairs

let state=null;
let count=undefined;
let isLoggedIn=false;
let userEmail="chst@example.com";
let userId=12345678901234567890n; //bigint
console.log(typeof userId);
let userSymbol=Symbol("myid");
let userDetails={name:"chst", age:22};
console.log(typeof userDetails);
console.log(typeof state);
console.log(typeof count);
console.log(typeof isLoggedIn);
console.log(typeof userEmail);  
console.log("user id is "+ userId.toString());
console.log(typeof userSymbol);
console.log(typeof null); //bug in js

//null is of object type is a bug in javascript. It should be of null type
//undefined is of undefined type
console.table({state, count, isLoggedIn, userEmail, userId, userSymbol, userDetails});