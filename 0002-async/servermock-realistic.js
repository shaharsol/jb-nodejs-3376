const howManyCandlesCallback = (dayNumber, callback) => {
    return setTimeout(() => {
        if (dayNumber < 1) {
            return callback('day cannot be smaller than 1');
        }

        if (dayNumber > 8) {
            return callback('No Isro Chag for Hannukah!');
        }

        return callback(null, dayNumber + 1);
    }, (Math.random() + 1) * 1000);
};

// const howManyCandlesPromise = (dayNumber) => {
//     return new Promise((resolve, reject) => {
//         howManyCandlesCallback(dayNumber, (err, result) => {
//             if (err) {
//                 reject(err)
//             }
//             resolve(result)
//         })
//     });
// }

// const work = async () => {
//     let sum = 0;
//     for (let i = 1; i < 9; i++) {
//         sum += await howManyCandlesPromise(i);
//     }
//     console.log(sum)
// }
// work();

const promisify = (func) => { }
const howManyCandlesPromise = promisify(howManyCandlesCallback);


const promises = [];
for (let i = 1; i < 9; i++) {
    promises.push(howManyCandlesPromise(i))
}

(async () => {
    const results = await Promise.all(promises);
    // let sum = 0;
    // for (let i = 0; i < results.length; i++) {
    //     sum += results[i]
    // }

    const sum = results.reduce((a, b) => a + b, 0)
    console.log(sum)

})();
