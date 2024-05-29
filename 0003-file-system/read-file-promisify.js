const fs = require('fs');
const util = require('util');

const promisified = util.promisify(fs.readFile);

(async () => {
    const data = await promisified('content.txt', 'utf8');
    promisified('content.txt', 'utf8').then(data => {})
    console.log(data);
})();


