import config from "config";
import express from "express";
import usersRouter from './routers/users'
import path from "path";
import { notFound } from "./middlewares/not-found";
import { errorLogger } from "./middlewares/error/errorLogger";
import { errorHandler } from "./middlewares/error/errorHandler";
import session from 'express-session'
import auth from './middlewares/auth'

declare 

const app = express();

// app setting
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'))

// middlewares
app.use(session({
   secret: 'secret',
   resave: false,
   saveUninitialized: false,
   cookie: {
        maxAge: 1000 * 60 * 60 * 24
   },
}))
app.use(auth.initialize())
app.use(auth.session());

// routing
app.use('/users', usersRouter);



// 404
app.use(notFound)

// error handling
app.use(errorLogger)
app.use(errorHandler)

// starting
app.listen(config.get('app.port'), () => {
    console.log(`${config.get('app.name')} with awsToken ${config.get('app.awsToken')} started on http://localhost:${config.get('app.port')}`)
})