const express = require('express')

const server = express();

const logError = (err, req, res, next) => { 
    console.log('logging error', err) 
    next(err)
}

const pagerDuty = (err, req, res, next) => { 
    console.log('should i call a person to deal with this error?') 
    next(err)
}

const reportErrorToUser = (err, req, res, next) => { 
    res.status(err.status || 500).send(err.message || 'something bad happened...')
}


const logIncomingRequest = (req, res, next) => { 
    console.log('logging incomingReqeust') 
    next()
}
const connectToMySQL = (req, res, next) => { 
    console.log('in connect to mysql') 
    const db = {
        database: 'some database'
    }
    req.db = db;
    next()
}
const checkAuth = (req, res, next) => { 
    console.log ('check auth')
    console.log('db is', req.db)
    next()
}
const sendJsonToClient = (req, res, next) => { 
    console.log('in sendJsonToClient')
    // res.writeHead(200)
    // res.end('here is json')
    res.send('here is the data')
    // next()
}
const saveJson = (req, res, next) => { 
    console.log('saving json')
    res.send('saved json')
}
const reject405 = () => { console.log('reject 405')}
const connectToMongoose = () => { console.log('connecting to mongo')}
const sendCsvToClient = () => { console.log('sendCsvToClient')}
const saveCsv = () => { console.log('in saveCsv')}
const notFound = () => { console.log('not found')}


const auth = (req, res, next) => {
    // const error = {
    //     status: 401,
    //     message: 'you are not authorized'
    // }
    const error = 'test'
    const header = req.headers.authorization;
    if (!header) next(error)
    const parts = header.split(' ');
    if (parts.length !==2) next(error)
    if (parts[0] !== 'Bearer') next(error)
    if (parts[1] !== '123') next(error)
    next()
}


server.use(auth); 
server.use(express.json())
server.use(express.urlencoded({extended: false}))
server.use(logIncomingRequest); 
server.use('/json', connectToMySQL)
server.get('/json/123', (req, res, next) => { console.log('special user') })
server.get('/json/:id', checkAuth, sendJsonToClient)
// server.get('/json', checkAuth)
// server.get('/json', sendJsonToClient)
server.post('/json', saveJson)
server.use('/json', reject405)
server.use('/csv', connectToMongoose)
server.get('/csv', sendCsvToClient)
server.post('/csv', saveCsv)
server.use('/csv', reject405)
server.use(notFound)
server.use(logError)
server.use(pagerDuty)
server.use(reportErrorToUser)


server.listen(8080, () => {
    console.log(`Server is running on http://localhost:${'8080'}`);
})