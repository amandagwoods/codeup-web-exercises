"use strict";

var input = prompt("Enter an odd number")
console.log("Your odd number to skip is: " + input);
    // if (input = ""){
    //     prompt("Enter an odd number");
    // }
    // if(input % 2 !== 0){
    //     prompt("Try an odd number");
    // }

for (var i = 1; i < 50; i++) {
    if (i % 2 === 0) {
        continue;
    }
    if (input == i) {
        console.log("Yikes! Skipping number " + i);
    } else {
        console.log("Here is an odd number: " + i);
        if (i >= 49) {
            break;
        }
    }
}