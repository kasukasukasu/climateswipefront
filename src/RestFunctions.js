const apiurli = '/';

export function fetchall(callback) {
    fetch(apiurli+'tasks', {accept: 'application/json'})
        .then(function(response) {
            response.json().then(function(json) {
                if (response.status >= 500)
                    console.log(json);
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