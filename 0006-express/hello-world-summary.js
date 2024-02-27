const express = require('express')
const app = express()
const port = 3000
const axios = require('axios');
const { toXML } = require('jstoxml');

const auth = require('./middlewares/auth')
const notFound = require('./middlewares/404')
const error = require('./middlewares/error')

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(auth);

app.get('/users', async (req, res, next) => {
  try {
    const response = await axios('https://jsonplaceholder.typicode.com/users');
    req.data = response.data;
    next();
  } catch (err) {
    next(err);
  }
});

app.get('/users', (req, res, next) => {
  try {
    const offset = req.query.offset || 0;
    const limit = req.query.limit || 2;
    req.data = req.data.slice(offset, limit);
    next();
  } catch (err) {
    next(err);
  }
});

app.get('/users', async (req, res, next) => {
  try {
    if (req.query.format === 'xml') {
      res.setHeader('Content-type', 'text/xml');
      return res.send(toXML(req.data));
    }
    return res.json(req.data);
  } catch (err) {
    next(err);
  }
});

app.use(notFound);
app.use(error);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



