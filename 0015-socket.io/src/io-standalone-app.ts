import express from 'express';
import path from 'path';

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('io-standalone-index');
});

app.listen(3000, () => {
  console.log('listening on *:3000');
});
