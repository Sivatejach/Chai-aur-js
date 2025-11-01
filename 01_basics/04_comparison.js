

console.log("2">1) // true
console.log("02">1) // false


console.log(null>0) // false
console.log(null>=0) // true
console.log(null==0) // false //type check null is object and 0 is number

// Reason is
// Comparisons like >,<,>=,<= use value conversion meaning they convert the values to numbers before comparison
// Equality operator == uses type conversion meaning it converts the values to same type before comparison
// In first case null is converted to 0 and comparison becomes 0>0 which is false
// In second case null is converted to 0 and comparison becomes 0>=0 which is true
// In third case no conversion is done and null is only equal to undefined



console.log(undefined > 0);   // false  (undefined → NaN)
console.log(undefined < 0);   // false  (undefined → NaN)
console.log(undefined == 0);  // false  (special equality rule)
console.log(undefined == NaN); // false (different concepts)
console.log(Number(undefined)); // NaN

//Reason is
// In all three cases undefined is converted to NaN and any comparison with NaN results to false
// In third case no conversion is done and undefined is only equal to null



console.log(Number(null));   // 0
console.log(Number(undefined)); // NaN
console.log(null == 0);      // false
console.log(null >= 0);      // true
console.log(null > 0);       // false
console.log(undefined == NaN); 


//Type Conversion to Number():
console.log(Number(undefined)); // NaN
console.log(Number(null));      // 0
console.log(Number(""));        // 0
console.log(Number(" "));       // 0



///String Conversion to String():
console.log(String(undefined)); // "undefined"(Literals)
console.log(String(null));      // "null"-Literals
console.log(String(NaN));       // "NaN"-Literals



//Boolean Conversion to Boolean():
console.log(Boolean(undefined)); // false
console.log(Boolean(null));      // false
console.log(Boolean(NaN));       // false
console.log(Boolean(""));        // false
console.log(Boolean(" "));       // true


//undefined  → type: undefined → Number: NaN → Boolean: false
//null       → type: object    → Number: 0   → Boolean: false
//NaN        → type: number    → Number: NaN → Boolean: false
//""         → type: string    → Number: 0   → Boolean: false
//0          → type: number    → Number: 0   → Boolean: false
//" "        → type: string    → Number: 0   → Boolean: 




//Special Rule
console.log(undefined == null); // true
//In equality operator == undefined and null are only equal to each other and not equal to any other value
console.log(undefined === null); // false
//In equality operator == undefined and null are only equal to each other and not equal to any other value  
console.log(undefined + 1); // NaN
console.log(null + 1); // 1
//In arithmetic operations undefined is converted to NaN and null is converted to 0
console.log(undefined + undefined); // NaN
console.log(null + null); // 0
//In arithmetic operations undefined is converted to NaN and null is converted to 0
console.log(undefined == 0); // false
console.log(null == 0); // false
//In equality operator == no conversion is done and undefined is only equal to null 
console.log(undefined >= 0); // false
console.log(null >= 0); // true
//In comparisons undefined is converted to NaN and null is converted to 0
//In comparisons like >,<,>=,<= use value conversion meaning they convert the values to numbers before comparison