const express = require('express');

const server = express();


const convertJsonToCsv = (req, res, next) => {
    // convert json to csv
    console.log('converting json to csv')    
    const csv = `id,name,age
                    123456789,Israel Israeli,50
                    74564376543,Moshe Moshe,30`;
    req.csv = csv;                    
    next()
};

const notAllowed = (req, res, next) => {
    res.status(405).send('method not allowed')
}

const logCsvLength = (req, res, next) => {
    console.log(`csv length is ${req.csv?.length}`)
    next()
}

server.use((req, res, next) => {
    if(req.headers.authorization !== 'hello') res.status(401).send('unauthorized') 
    console.log('authorization success')
    next()
})

server.patch('/csv', notAllowed)
server.put('/csv', notAllowed)
server.delete('/csv', notAllowed)

server.use('/csv', (req, res, next) => {
    // connect to mongo
    const isConnected = true;
    if(!isConnected) res.status(500).send('could not connect to mongo')
    console.log('connected to mongo')
    next()
})

server.get('/csv', (req, res, next) => {
    res.on('finish', () => {
        console.log('response finished, disconnecting from mongo')
    })
    next()
})

server.get('/csv', convertJsonToCsv, logCsvLength, (req, res, next) => {
    console.log('in csv GET')
    res.status(200).send(req.csv)
    console.log('response sent')
    req.sentToUSer = true;
    // next()
})

server.post('/csv', (req, res, next) => {
    console.log('in csv POST')
    // next()
})

// server.use('/csv', (req, res, next) => {
//     // disconnect from mongo
//     console.log('disconnected from mongo')
// })


server.get('/json', (req, res, next) => {
    console.log('in json GET')
})

server.post('/json', (req, res, next) => {
    console.log('in json POST')
})


server.listen(8080, () => {
    console.log('started...')
})