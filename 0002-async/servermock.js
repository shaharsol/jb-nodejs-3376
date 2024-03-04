const howManyCandlesCallback = (dayNumber, callback) => {
    if ( dayNumber < 1 ) {
        return callback ('day cannot be smaller than 1');
    }

    if ( dayNumber > 8 ) {
        return callback ('No Isro Chag for Hannukah!');
    }

    return callback ( null, dayNumber + 1 );
}

const howManyCandlesPromise = (dayNumber) => {
    return new Promise((resolve, reject) => {
        howManyCandlesCallback(dayNumber, (err, num) => {
            if(err) return reject(err);
            return resolve(num);
        })
    })
}

// HOF - higher order functions HOF
// Array.filter(() => {})
// Array.map(() => {})
// Array.find(() => {})
// Array.reduce() // take many values, return one value

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
Promise.all(promises)
    .then(results => console.log(results.reduce((acc, curr) => acc + curr, 0)))
    .catch(console.log)

// Promise.all(promises)
//     .then(results => {
//         let sum = 0;
//         for(i = 0; i < results.length; i++) {
//             sum += results[i]
//         }
//         console.log(sum);
//     })
//     .catch(console.log)

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

// let result = 0;
// howManyCandlesCallback(1, (err, num) => {
//     if(err) return;
//     result += num;
//     howManyCandlesCallback(2, (err, num) => {
//         if(err) return;
//         result += num;
//         howManyCandlesCallback(3, (err, num) => {
//             if(err) return;
//             result += num;
//             howManyCandlesCallback(4, (err, num) => {
//                 if(err) return;
//                 result += num;
//                 howManyCandlesCallback(5, (err, num) => {
//                     if(err) return;
//                     result += num;
//                     howManyCandlesCallback(6, (err, num) => {
//                         if(err) return;
//                         result += num;
//                         howManyCandlesCallback(7, (err, num) => {
//                             if(err) return;
//                             result += num;
//                             howManyCandlesCallback(8, (err, num) => {
//                                 if(err) return;
//                                 result += num;
//                                 console.log(result)
//                             })    
//                         })    
//                     })    
//                 })    
//             })    
//         })    
//     })    
// })