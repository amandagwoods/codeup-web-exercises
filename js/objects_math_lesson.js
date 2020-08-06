console.log("Math Object Lecture");

var randomNumber = Math.random();

//console.log(randomNumber);

///What if I want a number between 1 and 10?

function getRandomInt(min, max) {
    //Math.floor rounds down
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// var randomInt = getRandomInt(1, 10);
//
// console.log(randomInt);

console.log(Math.round(10.2));
//10
console.log(Math.round(10.6));
//11
console.log(Math.round(-10.6));
//-11

//Math.pow() returns the power of an integer
console.log(Math.pow(2,16));

//Math.sqrt() returns the square root of a number given.
var sqrtOf9 = Math.sqrt(9);
console.log(sqrtOf9);

console.log("before" + Math.PI);
Math.PI = 100;
console.log("after " + Math.PI);
