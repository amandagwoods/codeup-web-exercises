/**
 * Conditionals
 *
 * Fundamental Code Structues
 * -functions
 * -conditionals
 * -loops
 * -data structures
 * A Code Execution Roadtrip
 */

/**
 * If
 */

// if
// analogy: stopping for gas
// example: navbar custom name greeting

// var navBarMessage = "Welcome Guest!";
// if (userIsLoggedIn) {
//     navBarMessage = "Welcome " + loggedInUserName + !);
// }
// showNavBarMessage(navBarMessage);

// if (condition) {
//     //this code will execute if condition is true (boolean)
// }

// console.log("one");
// if (" ") {
//     console.log("two");
// }
// console.log("three");

// if-else
// analogy: fork in the road
// example: clicking on "buy"; check login status

// if (condition) {
//     //condition is true
// } else {
//     //condition is false
// }

// function handleUserBuyingItem(){
//     if (userLoggedIn) {
//         showCheckoutPage();
//     } else {
//         showLoginPage();
//     }
// }

// console.log("one");
// if (true) {
//     console.log("two A");
// } else {
//     console.log("two B");
// }
// console.log("three");

// if-else if-else
// analogy: roundabout
// example: click on "buy"; check login status, check if prime member

// if (condition1){
//     //condition1 is true
// } else if (condition2){
//     //condition2 is true
// }else if (condition3) {
//     //condition3 is true
// }
//
// if (condition1){
//     //condition1 is true
// } else if (condition2){
//     //condition2 is true
// }else {
//     //none of the checked conditions are true
// }

// function handleBuyNowClick() {
//     showLoginPage();
// } else if (userIsPrimeMember) {
//     showPrimeShippingOptions();
// }else {
//     showRegularShippingOptions();
// }
// }


// if (statusCode === 200){
//     return "Everything is ok!";
// } else if (statusCode === 404) {
//     return "Page not found";
// } else if (statusCode === 500) {
//     return "Internal Server Error!";
// } else{
//     return "Unknown Status code!"
//     {
// }
//
// var response = generateStatusCodeResponse (statusCode 200);
// console.log(response);

//remember: only one conditional branch will execute
// console.log("A");

// if (true) {
//     console.log("B");
// }else if (false) {
//     console.log("C");
// } else if{
//     console.log("D");
// } else{
//     console.log("E");
// }
//
// console.log("done!");

/**
 * Switch
 */

// switch -- more limited if-else chain

// if (value === 1) {
//     //1
// }else if (calue === 2) {
//     //2
// }else {
//     // ...
// }
// ///is the same as:
//
// switch(value) {
//     case 1:
//         break;
//     case 2:
//         break;
//     default:
//         // ...
// }
//case blocks are the same as an if statement, break stops each case from "falling through"

// function generateStatusCodeResponse (statusCode) {
//     switch(statusCode) {
//         case 200:
//             return "Everything is ok!";
//             break;
//         case 404:
//             return "Page not found!";
//             break;
//         case 500:
//             return "Internal Server Error";
//             break;
//         default:
//             return "Unknown Status Code!"
//             break;
//     }
// }

// var response = generateStatusCodeResponse (statusCode: 301);
// console.log(response);

// context: less common, but you should be able to read it
// example: http status code in response

/**
 * Ternary Operator
 *
 */

// ternary operator -- conditional expression (as opposed to statement)
// condition ? value_if_true : value_if_false
//statement: directs the flow of control within a program
//expression: operators and operands that produce a value

//10 * 100; //expresion that produces a value; 10, 100 = operands, * = operator

// any if else that contains a single line for variable assignment could be written with a ternary operator

// var userIsLoggedin = true;
// var message;
//
// if (userIsLoggedin) {
//     message = "welcome back!";
// } else {
//     message = "Please Register.";
// }
// //rewriting with a ternary operator
// var message = userIsLoggedin ? "Welcome Back" : "Please Register";


var itemsInCart = 5
//running promo for 10% off cart
//15% off if you have more than 7 items

var discount = itemsInCart > 7 ? 0.15 : 0.1;
