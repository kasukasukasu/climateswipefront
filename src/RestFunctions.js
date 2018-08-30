const url = 'http://localhost:8080/';

export function fetchall(callback) {
    fetch(url + "tasks", {accept: 'application/json'})
        .then(function(response) {
            response.json().then(function(json) {
                if (response.status >= 500)
                    callback(json, response.status);
                else
                    callback(json);
            });
        });
}

export function fetchallchoices(callback) {
    fetch(url + "relations", {accept: 'application/json'})
        .then(function(response) {
            response.json().then(function(json) {
                if (response.status >= 500)
                    callback(json, response.status);
                else
                    callback(json);
            });
            console.log('löytyy relations tiedot');
        });
}


export function createUser(id) {
    var user = '{"uid": "' + id + '"}';
    fetch(url + "users",  {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: user}
    );
}

export function createRelation(data) {
    var relation = '{"choice": "' + data.choice + '", "user": {"uid": "' + data.user_id + '"}, "task": {"id": ' + data.task_id + '}}';
    fetch(url + "relations",  {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: relation}
    );
}


export function fetchAllRelations(callback) {
    fetch(url + "relations", {accept: 'application/json'})
        .then(function(response) {
            response.json().then(function(json) {
                if (response.status >= 500)
                    callback(json, response.status);
                else
                    callback(json);
            });
        });
}


// export function fetchTask(id, callback) {
//     fetch(apiurli+'tasks/'+id, {accept: 'application/json'})
//         .then(function(response) {
//             response.json().then(function(json) {
//                 if (response.status >= 500)
//                     callback(json, response.status);
//                 else
//                     callback(json);
//             });
//         });
// }
//
// //tää ei vissii toimi
// export function deleteTasks(id/*, callback*/) {
//     return fetch(apiurli+'tasks/'+id, {method: 'DELETE'})
//         .then(function(response){
//             //callback();
//         })
// }
//
// export function createTask(task, callback) {
//     fetch(apiurli+'tasks/',  {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json' },
//         body: JSON.stringify(task)
//     })
//         .then((function(response) {
//             callback();
//         }));
// }
//
// export function updateTask(task, callback) {
//     fetch(apiurli+'tasks/'+task.id,  {
//         method: 'PUT',
//         headers: {'Content-Type': 'application/json' },
//         body: JSON.stringify(quote)
//     })
//         .then((function(response) {
//             callback();
//         }));
// }