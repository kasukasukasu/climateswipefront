const apiurli = 'api/';

export function fetchall(callback) {
    fetch(apiurli+'tasks', {accept: 'application/json'})
        .then(function(response) {
            response.json().then(function(json) {
                if (response.status >= 500)
                    callback(json, response.status);
                else
                    callback(json);
            });
        });
}

export function fetchTask(id, callback) {
    fetch(apiurli+'countries/'+id, {accept: 'application/json'})
        .then(function(response) {
            response.json().then(function(json) {
                if (response.status >= 500)
                    callback(json, response.status);
                else
                    callback(json);
            });C
        });
}

export function deleteCountry(id/*, callback*/) {
    return fetch(apiurli+'countries/'+id, {method: 'DELETE'})
        .then(function(response){
            //callback();
        })
}

export function createCountry(country, callback) {
    fetch(apiurli+'countries/',  {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(country)
    })
        .then((function(response) {
            callback();
        }));
}

export function updateCountry(country, callback) {
    fetch(apiurli+'countries/'+country.id,  {
        method: 'PUT',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(quote)
    })
        .then((function(response) {
            callback();
        }));
}