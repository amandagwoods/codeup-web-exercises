"use strict";

//For Loops
//2
// for (var i = 0; i < 10; i++) {
//     console.log('for loop iteration #' + i);
// }
function showMultiplicationTable(aNumber){
    for(var c = 1; c <= 10; c++){
        console.log(aNumber+" x " + c + " = " + (aNumber * c));

    }

}
showMultiplicationTable(7)

//3
function randomEvenOdd() {
    for (var x = 0; x < 10; x++) {
        var random = Math.floor((Math.random() * 200) + 20);
        if (random % 2 === 0 ) {
            console.log(random + " is even")
        }else {
            console.log(random + " is odd")
        }
    }
}

//fer's function
// function randomEvenOdd (var i = 1; i < 10; i++) {
//     if (getRandomInt(20,200) % 2 === 0>) {
//     console.log("even");
//     }else {
//     console.log("odd");
// }
// }
// randomEvenOdd()


//4
function numberPyramid() {
    for (var x = 1; x < 10; x++) {
        var pyramidTier = x.toString();
        for (var y = 1; y < x; y++) {
            pyramidTier += x;
        }
        console.log(pyramidTier);
    }
}
numberPyramid();


//fer's smallest function
for (var z = 1; z <= 9; z++){
    console.log(z.toString().repeat(z));
}
//long version
// for (var outer = 1; outer <= 9; outer++){
//     var result = "";
//     console.log("outer", outer);
//     for (var inner = 1; inner <= outer ; inner++){
//         result += outer;
//     }
//     console.log(outer);
// }

//5
for (var i = 100; i > 5; i = i - 5){
    console.log(i)
}

