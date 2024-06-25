import config from "config";
import express from "express";
import usersRouter from './routers/users'
import guestsRouter from './routers/guests'
import githubRouter from './routers/github'
import path from "path";
import { notFound } from "./middlewares/not-found";
import { errorLogger } from "./middlewares/error/errorLogger";
import { errorHandler } from "./middlewares/error/errorHandler";
import session from 'express-session'
import auth from './middlewares/auth'

declare global {
    namespace Express {
        interface User {
            id: number;
        }
    }
}

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
app.use('/guests', guestsRouter);
app.use('/github', githubRouter);



// 404
app.use(notFound)

// error handling
app.use(errorLogger)
app.use(errorHandler)

export default app;
