"use strict"

let gitReposUrl = "https://api.github.com/users/amandagwoods/events";
const gitToken = "96846451d9e52a913a029f68cdb2752d1b830d63"



 fetch(gitReposUrl, {headers: {'Authorization': gitToken}})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));


    //
    // getGitHubActivity()
    //     .then(users => {
    //         users.forEach(userobj => {
    //             console.log(userobj.login);
    //         });
    //     }).catch(error => console.error(error));


//  fetch('https://api.github.com/users');
// myPromise.then(response => console.log(response));
// myPromise.catch(error => console.error(error));

