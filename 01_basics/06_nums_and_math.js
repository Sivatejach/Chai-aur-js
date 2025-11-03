const score=400;
console.log("Your score is: " + score);

const balance =new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));


const num= 23.86444
console.log(num.toPrecision(3));


const numberval= 1000000
console.log(numberval.toLocaleString("en-IN"));



//+++++++++++++++++++++++++++++++++++++++MMaths++++++++++++++++++++++++++++++++++++++++++


//Math is by default library in js and mostlu used for mathematical operations
console.log(Math.PI);
console.log(Math.E);
console.log(Math)




console.log(Math.random()); //generates random number between 0 to 1

console.log(Math.round(4.6));//rounds to nearest integer
console.log(Math.round(4.4));//rounds to nearest integer
console.log(Math.floor(4.9));
console.log(Math.floor(0.1)+1); //Outputs =0 because it always rounds down to nearest integer
console.log(Math.ceil(4.1)); //always rounds up to greater integer
console.log(Math.trunc(4.9)); //removes decimal part without rounding