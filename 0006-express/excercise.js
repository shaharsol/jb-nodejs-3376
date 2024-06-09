const express = require('express');
const axios = require('axios')
const { toXML } = require('jstoxml');


const auth = (req, res, next) => {
    const error = {
        status: 401,
        message: 'you are not authorized'
    }
    const header = req.headers.authorization;
    if (!header) next(error)
    const parts = header.split(' ');
    if (parts.length !==2) next(error)
    if (parts[0] !== 'Bearer') next(error)
    if (parts[1] !== '123') next(error)
    next()
}

const notFound = (req, res, next) => {
    next({
        status: 404,
        message: 'what you are looking for is not here'
    })    
}

const reportErrorToUser = (err, req, res, next) => { 
    res.status(err.status || 500).send(err.message || 'something bad happened...')
}

const processUser = (req, res, next) => {
    res.send('hello')
}

const loadUsers = async (req, res, next) => {
    try {
        const response = await axios('https://jsonplaceholder.typicode.com/users');
        req.users = response.data
        next()
    } catch (err) {
        next(err)
    }
}

const filterUsers = (req, res, next) => {
    req.users = req.users.splice(req.query.offset || 0, req.query.limit || 10)
    next()
}

const respond = (req, res, next) => {
    if (req.query.format !== 'xml') return res.json(req.users)
    res.setHeader('Content-type', 'text/xml')
    res.send(toXML(req.users))

}


const server = express();

server.use(auth);
server.get('/users', loadUsers, filterUsers, respond)
server.use(notFound)
server.use(reportErrorToUser)

server.listen(8080, () => {
    console.log('started on http://localhost:8080')
})