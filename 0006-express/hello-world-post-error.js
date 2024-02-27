const express = require('express')
const app = express()
const port = 3000
const host = 'localhost';

const notFound = require('./middlewares/404')
const error = require('./middlewares/error')

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.post('/', (req, res) => {
  res.send(`id is ${req.body.id}`)
})

app.post('/raise', (req, res, next) => {
  next({error: 'error raised'});
})

app.use(notFound);
app.use(error);

app.listen(port, host, () => {
  console.log(`Example app listening on port ${port}`)
})


// // hint
// console.log(req)

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');


