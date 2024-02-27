const express = require('express')
const app = express()
const port = 3000

const logStatus = require('./middlewares/log-status')

app.use(express.urlencoded({extended: false}));
app.use(logStatus);

app.post('/', (req, res) => {
  res.send(`id is ${req.body.id}`)
})

app.get('/', (req, res) => {
  res.send(`this is a get`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})