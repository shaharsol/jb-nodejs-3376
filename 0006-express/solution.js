const express = require('express');
const axios = require('axios');
const { toXML } = require('jstoxml');

const sendPagerDuty = (err, req, res, next) => {
    console.log('calling the man on duty')
    next(err)
}

const logError = (err, req, res, next) => {
    console.log('logging error....')
    next(err)
}

const errorHandler = (err, req, res, next) => {
    res.status(err.status || 500).send(err.message || 'internal server error')
}

const auth = (req, res, next) => {
    const unauthorized = () => {
        next({
            status: 401,
            message: 'unauthorized'
        })
    }
    if (!req.headers.authorization) return unauthorized();
    const parts = req.headers.authorization.split(' ');
    if (parts.length !== 2) return unauthorized();
    if (parts[1] !== '123') return unauthorized();
    next();
};

const readUsers = async (req, res, next) => {
    try {
        const response = await axios('https://jsonplaceholder.fdsfsd.typicode.com/users');
        const users = response.data;
        req.users = users;
        next();
    } catch (err) {
        next(err);
    }
};

const filterUsers = (req, res, next) => {
    try {
        const offset = req.query.offset;
        const limit = req.query.limit;
        throw new Error('something went wrong...')
        if (!req.users) return next()
        req.users = req.users.slice(offset, offset + limit);
        next();
    } catch (err) {
        next(err);
    }
};

const respond = (req, res, next) => {
    if (req.query.format === 'xml') {
        const xml = toXML(req.users);
        res.setHeader('Content-Type', 'text/xml');
        return res.send(xml);
    }
    res.json(req.users)
};

const notFound = (req, res, next) => {
    res.status(404).send('not found')
};



/////////////////


const server = express();
server.use(auth);
server.get('/users', readUsers, filterUsers, respond);
server.use(notFound);

server.use(sendPagerDuty);
server.use(logError);
server.use(errorHandler);

server.listen(8080,() => {
    console.log('started...')
})


