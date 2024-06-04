const howManyCandlesCallback = (dayNumber, callback) => {
    if ( dayNumber < 1 ) {
        return callback ('day cannot be smaller than 1');
    }

    if ( dayNumber > 8 ) {
        return callback ('No Isro Chag for Hannukah!');
    }

    return callback ( null, dayNumber + 1 );
}

let sum = 0;
for (i = 1; i < 9; i++) {
    howManyCandlesCallback(i, (err, dayCandles) => {
        sum += dayCandles;
    })
}
console.log(sum)