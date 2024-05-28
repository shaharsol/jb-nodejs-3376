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

const howManyCandlesPromise = (dayNumber) => {
    return new Promise((resolve, reject) => {
        howManyCandlesCallback(dayNumber, (err, result) => {
            if (err) {
                reject(err)
            }
            resolve(result)
        })
    });
}

// howManyCandlesPromise(9).then(result => {
//     console.log(result)
// }).catch(err => {
//     console.error(err)
// })
