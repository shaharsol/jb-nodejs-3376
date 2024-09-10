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

const howManyCandlesPromise = (dayNumber) => {
    return new Promise((resolve, reject) => {
        howManyCandlesCallback(dayNumber, (err, result) => {
            if(err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
} 

// the promise way:
Promise.all([1,2,3,4,5,6,7,8].map(day => howManyCandlesPromise(day))).then(result => {
    console.log(result.reduce((cumm, curr) => cumm + curr, 0))
})

// the async way:
(async () => {
    const result = await Promise.all([1,2,3,4,5,6,7,8].map(day => howManyCandlesPromise(day)))
    console.log(result.reduce((cumm, curr) => cumm + curr, 0))
})();



// let sum = 0;
// howManyCandlesPromise(1)
// .then(result => {
//     sum += result
//     return howManyCandlesPromise(2)
// })
// .then(result => {
//     sum += result
//     return howManyCandlesPromise(3)
// })
// .then(result => {
//     sum += result
//     return howManyCandlesPromise(4)
// })
// .then(result => {
//     sum += result
//     return howManyCandlesPromise(5)
// })
// .then(result => {
//     sum += result
//     return howManyCandlesPromise(6)
// })
// .then(result => {
//     sum += result
//     return howManyCandlesPromise(7)
// })
// .then(result => {
//     sum += result
//     return howManyCandlesPromise(8)
// })
// .then(result => {
//     sum += result
//     console.log(sum)
// })
// This is wrong...
//
// let sum = 0;
// for (let i = 1; i <= 8; i++) {
//     howManyCandlesCallback(i, (err, result) => {
//         if(err) {
//             console.log(err)
//         } else {
//             sum += result
//             console.log(result)
//         }
//     })
// }
// console.log(sum)

// this is 
// let sum = 0;
// howManyCandlesCallback(1, (err, result) => {
//     if(err) {
//         console.log(err)
//     } else {
//         sum += result
//         howManyCandlesCallback(2, (err, result) => {
//             if(err) {
//                 console.log(err)
//             } else {
//                 sum += result
//                 howManyCandlesCallback(3,  (err, result) => {
//                     if(err) {
//                         console.log(err)
//                     } else {
//                         sum += result
//                         howManyCandlesCallback(4, (err, result) => {
//                             if(err) {
//                                 console.log(err)
//                             } else {
//                                 sum += result
//                                 console.log(sum)
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// })