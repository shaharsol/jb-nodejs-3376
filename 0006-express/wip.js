const express = require('express');

const server = express();
const csvRouter = express.Router();
server.use('/csv/', csvRouter)
server.use(express.json())
csvRouter.use(express.urlencoded())

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


csvRouter.patch('/', notAllowed)
csvRouter.put('/', notAllowed)
csvRouter.delete('/', notAllowed)

csvRouter.use((req, res, next) => {
    // connect to mongo
    const isConnected = true;
    if(!isConnected) res.status(500).send('could not connect to mongo')
    console.log('connected to mongo')
    next()
})

csvRouter.get('/', (req, res, next) => {
    res.on('finish', () => {
        console.log('response finished, disconnecting from mongo')
    })
    next()
})

csvRouter.get('/', convertJsonToCsv, logCsvLength, (req, res, next) => {
    console.log('in csv GET')
    res.status(200).send(req.csv)
    console.log('response sent')
    req.sentToUSer = true;
    // next()
})

csvRouter.post('/', (req, res, next) => {
    console.log('in csv POST')
    // next()
})

// csvRouter.use((req, res, next) => {
//     // disconnect from mongo
//     console.log('disconnected from mongo')
// })

server.get('/json', (req, res, next) => {
    // extract 234 out of req
    console.log(`in json GET. got id ${req.query.id}`)
})

server.get('/json/yossi/something/moti', (req, res, next) => {
    // extract 234 out of req
    console.log(`in special route`)
})

server.get('/json/:id/something/:otherId', (req, res, next) => {
    // extract 234 out of req
    console.log(`in json GET. got id ${req.params.id}, go otherid: ${req.params.otherId} and name is ${req.query.name}`)
})


server.post('/json', (req, res, next) => {
    console.log('in json POST')
})

server.post('/comment', express.urlencoded(), (req, res, next) => {
    // what's in the POST body????
    console.log('in comment POST')
})

server.use((req, res, next) => {
    res.status(404).send('not found')
})

server.listen(8080, () => {
    console.log('started...')
})