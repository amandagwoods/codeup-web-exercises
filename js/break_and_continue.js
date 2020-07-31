"use strict";

// var input = parseInt(prompt("Enter an odd number between 1 and 50."));
// console.log("Your odd number to skip is: " + input);
    // if (input = ""){
    //     prompt("Enter an odd number");
    // }
    // if(input % 2 !== 0){
    //     prompt("Try an odd number");
    // }

//Walkthrough
var input;

while(true){
    input = parseInt(prompt("Enter an odd number between 1 and 50."));
    if (input % 2 !== 0 && input > 0 && input < 51)
    break;
    console.log("Your odd number to skip is: " + input);
}
//////
for (var i = 1; i < 50; i++) {
    if (i % 2 === 0) {
        continue;
    }
    if (input === i) {
        console.log("Yikes! Skipping number " + i);
    } else {
        console.log("Here is an odd number: " + i);
        if (i >= 49) {
            break;
        }
    }
}