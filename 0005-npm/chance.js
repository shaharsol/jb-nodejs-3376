const Chance = require('chance');
const chance = new Chance();

console.log(chance.string({
    length: 5,
    pool: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
}));