"use strict"



function getLastCommitDate(username) {
    let url = `https://api.github.com/users/${username}/events`;

    console.log(url);

    return fetch(url, {headers: {'Authorization': gitToken}})
     .then((response) => response.json())
     .then(listOfEvents))=>{
        console.log(listOfEvents);
        for(let event of listOfEvents) {
            if(event.type === 'PushEvent'){
                return event.created_at;
            }
        }
     })
}

getLastCommitDate("amandagwoods") .then( date => console.log("last commit date: ", date));


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

