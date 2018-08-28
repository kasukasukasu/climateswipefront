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