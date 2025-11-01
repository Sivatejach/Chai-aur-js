// let score= "11"
// console.log(typeof score)
// console.log(typeof(score))
// let valueinNumber = Number(score) // convert string to number
// console.log(typeof valueinNumber)
// console.log(typeof(valueinNumber))
// console.log(valueinNumber + 1) // 12




// let num= "333aaa"
// let valueinNum= Number(num) // convert string to number
// console.log(typeof valueinNum)
// console.log(typeof(valueinNum))
// console.log(valueinNum)
// console.log(typeof(NaN));
//NaN is of number type in javascript
//NaN means not a number
//In javascript if we try to convert a string which contains characters other than numbers to number it will return NaN
//Similarly if we try to do any arithmetic operation with undefined it will return NaN
//We can check if a value is NaN or not by using isNaN() function




// let score = null
// console.log(typeof score)
// console.log(typeof(score))
// let valueinNumber = Number(score) // convert null to number
// console.log(typeof valueinNumber)
// console.log(typeof(valueinNumber))
// console.log(valueinNumber) // 0
// console.log(valueinNumber + 1) // 1




// let score = "Siva"
// console.log(typeof score)
// console.log(typeof(score))
// let valueinNumber = Number(score) // convert null to number
// console.log(typeof valueinNumber)
// console.log(typeof(valueinNumber))
// console.log(valueinNumber) // 0
// console.log(valueinNumber + 1) // 1







// let isLoggedIn = 1
// let booleanIsLoggedIn = Boolean(isLoggedIn) // convert number to boolean
// console.log(typeof booleanIsLoggedIn)
// console.log(booleanIsLoggedIn)


// let isLoggedIn = ""
// let booleanIsLoggedIn = Boolean(isLoggedIn) // convert number to boolean
// console.log(typeof booleanIsLoggedIn)
// console.log(booleanIsLoggedIn)






//  Investigation Results
//"333" -> 333
// "33abc" -> NaN
//true -> 1;false -> 0
// "", null, undefined, 0, NaN -> false
// "abc", " ", [], {} -> true
//Anything which has some value other than above false values will be treated as true in javascript
//Used in conditional statements and loops








//************************************************Operations*************************************************************** *//

// let value = 3
// let negValue = -value
// console.log(value) // 3
// console.log(negValue) // -3
// console.log(-negValue) // 3


// console.log(2+2)
// console.log(2-2)
// console.log(2*2);
// console.log(2/2);

// let str1= "Hello"
// let str2= "Chst"
// let str3= str1 + " " + str2
// console.log(str3)


// console.log("1" + 2) // "12"
// console.log(1 + "2") // "12"
// console.log("1" + "2") // "12"
// console.log(1 + 2) // 3
// console.log("1"+ 2 + 2) // "122"
// console.log(1 + 2 + "2") // "32"
// console.log("1"+ (2 + 2)) // "14"
// console.log(1 + (2 + "2")) // "32"

//In the presence of a string in addition operation everything will be converted to string and concatenated


// console.log(+true) // 1
// console.log(+false) // 0
// console.log(+"") // 0
// console.log(1+2+"33") // "3333"
// console.log(+"33") // 33
// console.log("33"+ 0) // "330"
// console.log(+"C") // NaN
// console.log(+"33abc") // NaN
// console.log(+null) // 0
// console.log(+undefined) // NaN
// console.log(NaN + 3) // NaN
// console.log(3 + undefined) // NaN

//difference between undefined and null in arithmetic operations
//undefined when used in arithmetic operations will return NaN
//null when used in arithmetic operations will be treated as 0

//WHAT IS NaN?
//NaN is a special numeric value which indicates not a number
//NaN is contagious in javascript
//If any operand in an arithmetic operation is NaN the result will be Na