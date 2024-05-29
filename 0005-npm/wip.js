// const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

// let result = '';
// for (let i = 0; i < 5; i++) {
//     const idx = Math.floor(Math.random() * chars.length)
//     result += chars[idx]
// }
// console.log(result)

const randomstring = require("randomstring");
console.log(randomstring.generate(5))
