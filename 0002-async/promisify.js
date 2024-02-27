const promisify = (fun) => {
    return async (...args) => {
        return new Promise((resolve, reject) => {
            fun(...args, (err, data) => {
                if (err) {
                    return reject(err);
                }
                resolve(data);
            });
        });
    };
};