const fs = require('fs');
// const util = require('util');

// const promisified = util.promisify(fs.readFile);

const asaf = (callbackFunc) => {
    return (...args) => {
        return new Promise((resolve, reject) => {
            callbackFunc(...args, (err, data) => {
                if(err) return reject(err)
                resolve(data)    
            })
        })
    }
}

const promisified = asaf(fs.readFile);


(async () => {
    const data = await promisified('content.txt', 'utf8');
    console.log(data);
})();
