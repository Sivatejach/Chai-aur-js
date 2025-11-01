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