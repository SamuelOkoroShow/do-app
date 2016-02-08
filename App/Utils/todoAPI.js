var api = {
    getTodo(username) {
        username = username.toLowerCase().trim();
        var url = 'https://resplendent-inferno-1454.firebaseio.com/$(username).json'
        return fetch(url).then((res) => res.json());
    },
    addTodo(username, todo) {
        username = username.toLowerCase().trim();
        var url = 'https://resplendent-inferno-1454.firebaseio.com/' + username + '.json'
        return fetch(url, {
        method:'post',
            //todo can be a json object
            body: JSON.stringify(todo)
        }).then((res) => res.json());
        
    }

};
module.exports = api;