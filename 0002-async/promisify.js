const promisify = (fun) => {
    return async (...args) => {
        return new Promise((reject, resolve) => {
            fun(...args, (err, data) => {
                if (err) {
                    // reject(err);
                }else{
                    reject(data);
                }
            });
        });
    };
};