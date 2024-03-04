console.log(`hello ${process.env.NAME}`);
console.log('hello ' + process.env.NAME);

const user = getUserFromServer(1).then();

function async getUserFromServer(id) {
    let user = Promise.resolve(getFromCache());
    if(!user) {
        user = getFromServer();
        pushToCache(user)
    }
    return user;
}

function pushToCache(user) {
    user.then(u => cache[id] = u)
}