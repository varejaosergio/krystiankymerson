const URL = window.location.hostname.includes('localhost')
? 'http://localhost:8080'
: 'https://kkfly.herokuapp.com/';

export default { 
    URL,
};