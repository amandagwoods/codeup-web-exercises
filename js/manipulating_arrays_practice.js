var daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];
console.log(daysOfTheWeek);

daysOfTheWeek.push("Friday");
daysOfTheWeek.push("Saturday");

daysOfTheWeek.unshift("Sunday");

console.log(daysOfTheWeek);

daysOfTheWeek.push("true");

daysOfTheWeek.pop();
console.log(daysOfTheWeek);

daysOfTheWeek.shift();
console.log(daysOfTheWeek);

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'red'];

console.log("red index 0", colors [0]);

colors.unshift("black");

console.log("red variable index", colors.indexOf("red"));


console.log(colors.indexOf("red"));
///quick way to find index of elements in variable
///returns -1 if not found

//look in screen shots for loop - index of is better option
// for(var x=0; x < colors.length; x++)

var slice = colors.slice(2, 5);
//first param indicates the index to start with including it, the second indicates up to which element WITHOUT including it
console.log(colors);
console.log(slice);

var moreSlices = colors.slice(0, colors.indexOf("blue") +1);
console.log(moreSlices);
//includes all the numbers up to blue, and then +1 includes blue
//index of returns a number so you can add to it
//-1 can be used to indicate the end of the length of array (0,-1)
//can use a slice with only 1 number and start at that variable (2)

/////////////////////
colors.reverse();
console.log(colors);

//sorting goes alpha or numeric order
colors.sort();
console.log(colors);

var namesString = "Joe,Bob,Sally";

console.log(namesString);
////////////////

"blue|red|yellow".split()
"blue|red|yellow".split(""); // split by letter for letter count
"blue|red|yellow".split("|");
////////

var fullNameArray = "Amanda-Nichole-Garrison-Woods";
full