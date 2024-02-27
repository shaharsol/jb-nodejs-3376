const express = require('express');
const app = express();

app.use((req, res, next) => {
    next()
})
app.get('/', (req, res, next) => {
    res.send('hello')
})
app.use((err, req, res, next) => {
    res.status(400).end('invalid requets')
})

app.use((req, res, next) => {
    res.status(404)
})