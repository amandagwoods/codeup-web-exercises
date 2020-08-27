console.log("bom lecture")

var name = "Amanda";
console.log(name);

function sayHello(name) {
    console.log("hello " + name);
}

sayHello(name);

(function() {
// alert("I'm an alert! Red Alert!")
//     var answer = confirm("Do you want to delete the internet? ")
//     if (answer) {
//         alert("Don't be silly we can't delete the whole internet!");
//     }else {
//             alert("this is the correct answer.");
//     }

    // var favoriteColor = prompt("What is your favorite color?")
    // console.log("The favorite color entered is " + favoriteColor);
    //
    // if(favoriteColor === "blue"){
    //     alert("that's great! I love blue too!");
    // } else {
    //     alert("oh, that's nice. i like blue.")
    // }

    var numberOfTimesRun=0;

    var helloInterval = setInterval(function(){
        numberOfTimesRun += 1;
        console.log("hello " + numberOfTimesRun);
        if(numberOfTimesRun >= 5){
            clearInterval(helloInterval)
        }
    }, 2000);


    // setTimeout(function(){
    //     console.log("Hello after a while");
    // }, 5000)





})();