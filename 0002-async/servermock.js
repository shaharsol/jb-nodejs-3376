const howManyCandlesCallback = (dayNumber, callback) => {
    if ( dayNumber < 1 ) {
        return callback ('day cannot be smaller than 1');
    }

    if ( dayNumber > 8 ) {
        return callback ('No Isro Chag for Hannukah!');
    }

    return callback ( null, dayNumber + 1 );
}

// let sum = 0;
// for (let i = 1; i <= 8; i++) {
//     howManyCandlesCallback(i, (err, result) => {
//         if(err) {
//             console.log(err)
//         } else {
//             sum += result
//         }
//     })
// }
// console.log(sum)

