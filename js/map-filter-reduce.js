"use strict";
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
//Use .filter to create an array of user objects where each
// user object has at least 3 languages in the languages array.

let languageUsers = users.filter((users) => users.languages.length> 2);
    console.log(languageUsers)

//Use .map to create an array of strings where each element is a
// user's email address
let emailUsers = users.map((users) => users.email);
    console.log(emailUsers)

//Use .reduce to get the total years of experience from the list of users.
// Once you get the total of years you can use the result to calculate the average.
let exerienceUsers = users.reduce((total,user) =>{
    return total + user.yearsOfExperience
}, 0);
    console.log(exerienceUsers)

// Use .reduce to get the longest email from the list of users.
let longEmail = users.reduce ((total,user) =>{
    if (total.length < user.email.length){
        return user.email
    }
    return total;

},"");
    console.log(longEmail)

//Use .reduce to get the list of user's names in a single string. Example: Your
// instructors are: ryan, luis, zach, fernando, justin.
let names = users.reduce ((sentence,user) =>
    sentence === ''? user.name : sentence+', '+user.name,"Your instructors are: " );
   console.log(names+ ".");
//     if (total === ""){
//         return total + "Your instructors are: " + user.name;
//     }
//     return total + ", " + user.name;
// });
// console.log(yourInstructor)

//Bonus** Use .reduce to get the unique list of languages from the list of users.
let uniqueLangs = users.reduce((langList, user) => {
    for (let lang of user.languages){
        if (!langList.includes(lang)) {
            langList.push(lang);
        }
    }
    return langList
}, []);

console.log(uniqueLangs);
