var api ={
getTodo(username){
username  = username.toLowerCase().trim();
    var url = 'https://resplendent-inferno-1454.firebaseio.com/$(username).json'
return fetch(url).then((res) => res.json());
}
    
    
};

module.exports = api;