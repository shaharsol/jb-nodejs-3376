import express from 'express';
import session from 'express-session';

import path from 'path';
import auth from './middlewares/auth';

const app = express()

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 365 * 5,
    },
  }));

app.use(auth.initialize());
app.use(auth.session());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/dashboard', (req, res) => {
    if(!req.user) {
      res.redirect('/login');
    }
    res.send(`Dashboard of ${JSON.stringify(req.user)}`)
})

app.get('/login', (req, res) => {
    if(req.user) {
      res.redirect('/dashboard');
    }
    res.render('index');
})

app.get('/logout', (req, res, next) => {
  if(req.user) {
    req.logout((err) => {
      if(err) return next(err);
      res.redirect('/login')
    });
  }
  res.redirect('/login');
})

app.post('/login', auth.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
}));

app.listen(8080, () => {
    console.log(`Example app listening on port 8080`)
})