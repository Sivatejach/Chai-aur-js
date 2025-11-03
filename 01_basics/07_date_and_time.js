//Date and Time


let myDate = new Date();

//console.log(myDate);

// console.log(myDate.toString());

// console.log(myDate.toDateString());

// console.log(myDate.toLocaleString());

// console.log(myDate.toTimeString());

// console.log(myDate.toLocaleDateString());

// console.log(myDate.toLocaleTimeString());


// let newDate = new Date(2023, 5, 15, 10, 30, 1); // Year, Month (0-11), Day, Hour, Minute, Second
// console.log(newDate.toLocaleString());


// let newOne = new Date("2023-01-15");
// console.log(newOne.toLocaleString());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);

// console.log(newOne.getTime());
// console.log(newOne.getTime());


console.log(Math.floor(Date.now()/1000)); // Unix Timestamp in seconds


let newDate = new Date();
console.log(newDate.getFullYear());
console.log(newDate.getMonth() + 1); // Months are zero-based
console.log(newDate.getDate());
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());
console.log(newDate.getMilliseconds());
console.log(newDate.getDay()); // 0 (Sunday) to 6 (Saturday)

console.log(`${newDate.getDate()} ${newDate.getMonth() + 1} ${newDate.getFullYear()}`);