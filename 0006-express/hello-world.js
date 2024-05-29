const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res, next) => {
    res.setHeader('Content-type', 'text/html')
    // res.setHeader('Content-type','application/json')
    // res.writeHead(200)
    // res.end('{}')
    res.json({})
    next()
})

app.get('/', (req, res, next) => {
    console.log('log request')
})


app.delete('/ticket/:id', (req, res, next) => {
    res.send(`ticket deleted ${req.params.id}`)
})




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



