"use strict";

var i = 1;
while(i < 65536) {
    i = i*2;
    console.log(i);

}
/////////
// This is how you get a random number between 50 and 100
// var allCones = Math.floor(Math.random() * 50) + 50;
// // This expression will generate a random number between 1 and 5
// Math.floor(Math.random() * 5) + 1;

5 cones sold...  // if there are enough cones
Cannot sell you 6 cones I only have 3...  // If there are not enough cones
    Yay! I sold them all! // If there are no more cones

// do {
//     //body
// }while(/*condition*/);


var allCones = Math.floor(Math.random() * 50) + 50;
Math.floor(Math.random() * 5) + 1;


do {
    console.log(allCones);
    i++;
} while (i >= allCones){

}
