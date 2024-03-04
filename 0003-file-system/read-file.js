const { readFileSync } = require('fs');
const { promisify } = require('util'); 

// const promisify = (func) => {
//     return (...args) => {
//         return new Promise((resolve, reject) => {
//             func(...args, (err, data) => {
//                 if (err) {
//                     return reject(err);
//                 }
//                 resolve(data);
//             });
//         });
//     };
// };


// (a) => a + 1;



// const promisify = (func) => (...args) => new Promise((resolve, reject) => {
//     func(...args, (err, data) => {
//         if (err) {
//             return reject(err);
//         }
//         resolve(data);
//     });
// });



// const fsReadFilePromise = promisify(readFile);

// fs.readFile('content.txt', 'utf8', (err, data) => {
//     if (err) {
//         return console.error(err)
//     }
//     return console.log(data);
// })

// (async() => {
    const content = readFileSync('content.txt', 'utf8');
    console.log(content);
// })();