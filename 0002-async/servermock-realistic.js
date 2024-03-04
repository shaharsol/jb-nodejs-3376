const howManyCandlesCallback = (dayNumber, callback) => {
    return setTimeout(() => {
        if ( dayNumber < 1 ) {
            return callback ('day cannot be smaller than 1');
        }
    
        if ( dayNumber > 8 ) {
            return callback ('No Isro Chag for Hannukah!');
        }
    
        return callback ( null, dayNumber + 1 );
    }, (Math.random() + 1 ) * 1000);
    
};


// let result = 0;
// for(let i=1; i<=8; i++) {
//     howManyCandlesCallback(i, (err, numberOfCandles) => {
//         if(err) {
//             return;
//         }
//         result += numberOfCandles;
//     })
// }
// console.log(result);
const howManyCandlesPromise = (dayNumber) => {
    return new Promise((resolve, reject) => {
        howManyCandlesCallback(dayNumber, (err, num) => {
            if(err) return reject(err);
            return resolve(num);
        })
    })
}
const promises = [
    howManyCandlesPromise(1),
    howManyCandlesPromise(2),
    howManyCandlesPromise(3),
    howManyCandlesPromise(4),
    howManyCandlesPromise(5),
    howManyCandlesPromise(6),
    howManyCandlesPromise(7),
    howManyCandlesPromise(8),
];
// Promise.all(promises)
//     .then(results => console.log(results.reduce((acc, curr) => acc + curr, 0)))
//     .catch(console.log)

// const calc = async () => {
//     try {
//         const firstDay = await howManyCandlesPromise(1);
//         console.log(firstDay)
//         const results = await Promise.all(promises);
//         console.log(results.reduce((acc, curr) => acc + curr, 0))
//     } catch (err) {
//         console.log(err)
//     }
// }


// calc();



// IIFE 
(async () => {
    try {
        const firstDay = await howManyCandlesPromise(1);
        console.log(firstDay)
        const results = await Promise.all(promises);
        console.log(results.reduce((acc, curr) => acc + curr, 0))
    } catch (err) {
        console.log(err)
    }
})();

