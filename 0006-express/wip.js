const express = require('express');
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use((req, res, next) => {
    const authError = {
        status: 401,
        message: 'not authorized'
    }
    const authHeader = req.get('authorization');
    if (!authHeader) next(authError);

    const parts = authHeader.split(' ');

    if (parts.length !== 2) next(authError);

    if (parts[2] !== '123') next(authError);

    next()



})

app.get('/', (req, res) => {
    res.send(`username is ${req.username}`)
})

app.post('/user/', (req, res, next) => {
    // res.send(`data is ${req.body.lastName}`)
    // next() // -> fwd to next middleware
    next({ message: 'you must add birthdate to a new user record' }) // -> fwd to next ERROR middleware
})

app.post('/user/:id', (req, res) => {
    res.send(`posting user ${req.params.id}, with query param: ${req.query.id}`)
})

app.delete('/ticket/:id', (req, res) => {
    res.send(`deleting ticket ${req.params.id}`)
})

app.patch('/employee/:id', (req, res) => {
    res.send(`patching employee ${req.params.id}`)
})

app.put('/organization/:orgId', (req, res) => {
    res.send(`putting organization ${req.params.orgId}`)
})

app.get('/organization/employees', (req, res) => {
    res.send(`getting org employees`)
})

app.get('/organization/:orgId', (req, res) => {
    res.send(`getting organization ${req.params.orgId}`)
})


app.use((req, res, next) => {
    // res.status(404).send('not found')
    next({
        status: 404,
        message: 'not found'
    })
})

// error - pager duty
app.use((err, req, res, next) => {
    // invoke pager duty
    console.log('pager duty')
    next(err)
})

// error - log errors
app.use((err, req, res, next) => {
    console.log('logging error')
    console.error(err)
    next(err)
})

// error - return message to user
app.use((err, req, res, next) => {
    res.status(err.status || 500).send(err.message)
})

app.listen(3000, () => {
    console.log('app started on port 3000')
})