//
// var yesNo = false;
//
// while(yesNo) {
//     console.log("Ran loop");
//     yesNo = confirm("Would you like to continue?");
// }

// console.log("we finished");

// var start = 0
//
// while(start <= 10){
//     console.log(start);
//     start++;
//
// }

// do {
//     console.log("Run do while loop");
// } while(confirm("Would you like to continue?"));

// var doStart = 10;
//
// do{
//     console.log(doStart);
//     doStart--;
// } while(doStart >= 0)

// for(var x = 0 ; x <= 10 ; x ++){
//     console.log("x", x);
// }

//for loop with a break
var numberToBreakAt = 5

for(var x = 0 ; x <= 10 ; x ++){
    console.log("x", x);
    if(x === 5){
        break;
    }
}
//for loop example
var employeeNumberToSkip = 3;
var anotherEmpoloyeeToSkip = 8;

for (var x = 0 ; x <= 10 ; x++){
    if(x === employeeNumberToSkip || x === anotherEmpoloyeeToSkip){
        continue;
    }
    console.log(x + " gets paid");

}

while(true){
    var name = prompt("What is your name?");
    if (name === ""){
        console.log("empty name is not valid");
        break;
    }
    console.log("name is valid");
}