const randomstring = require('randomstring');

const str = randomstring.generate({
    charset: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    length: 5
});

console.log(str);