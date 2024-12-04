// const howManyCandlesCallback = (dayNumber, callback) => {
//     if ( dayNumber < 1 ) {
//         return callback ('day cannot be smaller than 1');
//     }

//     if ( dayNumber > 8 ) {
//         return callback ('No Isro Chag for Hannukah!');
//     }

//     return callback ( null, dayNumber + 1 );
// }

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

const howManyCandles = (dayNumber) => {
    return new Promise((resolve, reject) => {
        howManyCandlesCallback(dayNumber, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

// let sum = 0
// for (let i = 1; i <= 8; i++) {
//     howManyCandlesCallback(i, (err, data) => {
//         if(err) {
//             console.error(err)
//         }else{
//             sum += data
//         }
//     })
// }
// console.log(sum)
// let sum = 0;
// howManyCandlesCallback(1, (err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         sum += data
//         howManyCandlesCallback(2, (err, data) => {
//             if (err) {
//                 console.log(err)
//             } else {
//                 sum += data
//                 howManyCandlesCallback(3, (err, data) => {
//                     if (err) {
//                         console.log(err)
//                     } else {
//                         sum += data
//                         howManyCandlesCallback(4, (err, data) => {
//                             if (err) {
//                                 console.log(err)
//                             } else {
//                                 sum += data
//                                 howManyCandlesCallback(5, (err, data) => {
//                                     if (err) {
//                                         console.log(err)
//                                     } else {
//                                         sum += data
//                                         console.log(sum)
//                                     }
//                                 })
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// })

// function printCandle(candle) {
//     console.log(candle)
// }
// howManyCandles(1)
//     .then(console.log)
//     .catch(console.error)

// const roni = async () => {
//     const dayFourResult = await howManyCandles(4)
//     console.log(dayFourResult)    
// }    
// roni()

// IIFE imeddiately interpreted function execution
// (async function roni() {
//     const dayFourResult = await howManyCandles(4)
//     console.log(dayFourResult)    
// })()
(async () => {
    const result = await Promise.all([1, 2, 3, 4, 5, 6, 7, 8].map(i => howManyCandles(i)))
    console.log(result)
})()
