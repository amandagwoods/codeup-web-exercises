//For Loops
//2
// for (var i = 0; i < 10; i++) {
//     console.log('for loop iteration #' + i);
// }


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
randomEvenOdd()


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

//5
for (var i = 100; i > 5; i = i - 5){
    console.log(i)
}

