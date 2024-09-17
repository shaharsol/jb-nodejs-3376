const express = require('express')

const server = express();

const logRequestToFile = (req, res, next) => { console.log('logging request to file'); next() }
const connectToMongo = (req, res, next) => { 
    console.log('connecting to mongo'); 

    console.log('error connecting to mongo...')
    next('error connecting to mongo...')

    // const mongoConnection = 'mongoConnection'
    // req.mongoConnection = mongoConnection
    // next() 
}
const respondWithJson = (req, res, next) => { 
    console.log(`i got a mongo connection: ${req.mongoConnection}`)
    console.log('responding with json'); 
    next() 
}
const saveJson = (req, res, next) => { console.log('saving json'); next() }
const respond405 = (req, res, next) => { console.log('responding 405'); next() }
const connectToMysql = () => {}
const respondWithCsv = () => {}
const saveCsv = () => {}
const disconnectFromMongo = (req, res, next) => { console.log('disconnecting from mongo'); next() }
const disconnectFromMysql = () => {}
const logResponseStatus = (req, res, next) => { console.log('logging response status'); next() }
const respond404 = () => {}
const closeTheResponse = (req, res, next) => { console.log('closing the response'); res.end()}
const auth = (req, res, next) => { 
    if (req.query.token === '123') {
        next()
    } else {
        res.status(401).send('you are not authorized')
    }
}
const logError = (err, req, res, next) => {
    console.error(err)
    next(err)
}
const trueSite = (err, req, res, next) => {
    console.log('messaged the IT team')
    next(err)
}
const errorHandler = (err, req, res, next) => {
    res.status(500).send(err)
}


server.use(logRequestToFile)
server.use(auth)
server.use('/json', connectToMongo)
server.get('/json', respondWithJson)
server.post('/json', saveJson)
server.put('/json', respond405)
server.delete('/json', respond405)
server.use('/json', disconnectFromMongo)
server.use('/csv', connectToMysql)
server.get('/csv', respondWithCsv)
server.post('/csv', saveCsv)
server.use('/csv', respond405)
server.use('/csv', disconnectFromMysql)
server.use(logResponseStatus)
server.use(closeTheResponse)
server.use(respond404)

server.use(logError)
server.use(trueSite)
server.use(errorHandler)

server.listen(8080, () => {
    console.log('express server started on http://localhost:8080')
})