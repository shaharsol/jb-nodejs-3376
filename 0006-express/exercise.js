const express = require('express')
const authBearerParser = require('auth-bearer-parser').default;
const { toXML } = require('jstoxml')
const axios = require('axios')

const notFound = (req, res, next) => {
    next({
        status: 404,
        message: 'not found'
    })
}

const errorHandler = (err, req, res, next) => {
    res.status(err.status || 500).send(err.message || 'something is wrong')
}

const auth = (req, res, next) => {
    if (req.token === '123') return next()
    next({
        status: 401,
        message: 'unknown bearer token'
    })
}

const readUsers = async (req, res, next) => {
    try {
        const response = await axios('https://jsonplaceholder.typicode.com/users')
        req.users = response.data
        next()
    } catch (e) {
        next(e)
    }
}

const filterUsers = (req, res, next) => {
    const offset = req.query.offset || 0;
    const limit = req.query.limit || 10;
    req.users = req.users.splice(offset, limit)
    next()
}

const respond = (req, res, next) => {
    if (req.query.format === 'xml') {
        res.setHeader('Content-type', 'text/xml')
        res.send(toXML(req.users))
    } else {
        res.json(req.users)
    }
}

const server = express()

server.use(authBearerParser({ isThrowError: true }))
server.use(auth)
// server.get('/users',readUsers)
// server.get('/users',filterUsers)
// server.get('/users',respond)
server.get('/users',readUsers, filterUsers, respond)
server.use(notFound)
server.use(errorHandler)


server.listen(8080, () => {
    console.log('server started...')
})