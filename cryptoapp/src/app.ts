import config from 'config';
import express from 'express';
import usersRouter from './routers/users';
import githubRouter from './routers/github';
import guestsRouter from './routers/guests';
import path from 'path';
import notFound from './middlewares/error/404';
import error from './middlewares/error/error';
import githubAuth from './middlewares/github-auth';
import session from 'express-session';

declare global {
    namespace Express {
        interface User {
            id: number;
        }
    }
}

// app config
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'))

// middlewares
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}));
app.use(githubAuth.initialize());
app.use(githubAuth.session())

// routing
app.use('/', guestsRouter)
app.use('/users', usersRouter)
app.use('/github', githubRouter)

// errors
app.use(notFound);
app.use(error);

app.listen(config.get('app.port'), () => {
    console.log(`${config.get('app.name')} with secret ${config.get('app.secret')} started on ${config.get('app.port')}`)
})
