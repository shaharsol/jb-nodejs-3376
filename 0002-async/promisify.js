const promisify = (func) => {
    return async (...args) => {
        return new Promise((resolve, reject) => {
            func(...args, (err, data) => {
                if (err) {
                    return reject(err);
                }
                resolve(data);
            });
        });
    };
};