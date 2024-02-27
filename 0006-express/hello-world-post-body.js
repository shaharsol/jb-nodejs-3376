const express = require('express')
const app = express()
const port = 3000
const host = 'localhost';

const logStatus = require('./middlewares/log-status')

app.post('*', logStatus);
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use((req, res, next) => {
    if(req.headers.authorization !== 'Bearer 123') {
      return res.status(401).end('get away from here');
    } 
    next();
})

app.post('/', (req, res, next) => {
  res.send('entered the POST middleware');
})

app.listen(port, host, () => {
  console.log(`Example app listening on port ${port}`)
})


// // hint
// console.log(req)

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');


