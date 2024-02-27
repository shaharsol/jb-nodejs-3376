const config = require('config');

console.log(config.get('app.name'));
console.log(config.get('app.secret'));