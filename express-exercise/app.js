const express = require('express');
const error = require('./middlewares/error/error')
const notFound = require('./middlewares/error/404')
const authorization = require('./middlewares/authorization')
const getUsers = require('./middlewares/get-users')
const filterUsers = require('./middlewares/filter-users')
const formatResponse = require('./middlewares/format-response')

const app = express();

// general middlewares
app.use(authorization);

// implementation middlewares
app.get('/users', getUsers, filterUsers, formatResponse)

// error middlewares
app.use(notFound);
app.use(error)

app.listen(3000, () => {
    console.log('app started...')
})
