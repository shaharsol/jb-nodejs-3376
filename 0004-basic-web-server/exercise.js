const express = require('express')

const server = express()

const example = (req, res, next) => {
    console.log(req.param.id)
    next()
}

const history = (req, res, next) => {
    console.log(req.param.id)
    next()
}

const notFound = (req, res, next) => {
    next({
        status: 404,
        message: 'not found!!!'
    })
}

const errorHandler = (err, req, res, next) => {
    res.status(err.status).send(err.message)
}

server.use(express.json())
server.use(express.urlencoded({extended: false}))
server.use(example)
server.use(notFound)
server.use(errorHandler)

server.listen(8080, () => {
    console.log('express server started on http://localhost:8080')
})