"use strict"

let gitReposUrl = "https://api.github.com/users/amandagwoods/events";


function getLastCommitDate(username) {
 return fetch(gitReposUrl, {
     headers: {'Authorization': gitToken}})
     .then(response => response.json())
     .then(data => console.log(data))
    //  .then(events => {
    //     return events.filter(event => event.type === "PushEvent")[0].created_at;
    // })
    .catch(error => console.error(error));
}


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

