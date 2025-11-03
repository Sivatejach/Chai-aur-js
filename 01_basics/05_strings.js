
const name = 'John';


const repeatCount = 3;

//String Interpolation-Injection variables inside string using backticks ``
console.log(`Hello my name is ${name}. and  my repository is ${repeatCount}`);


const gamename = new String('Chess');
console.log(gamename[0]);

console.log(gamename.indexOf('s'));
console.log(gamename.charAt(0));
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.toLowerCase());
console.log(gamename.includes('ess'));

console.log(gamename.__proto__);