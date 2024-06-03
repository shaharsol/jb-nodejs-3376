import config from 'config';
import express from 'express';
import path from 'path';
import apiRouter from './routers/api';
import notFound from './middlewares/error/404';
import error from './middlewares/error/error';
import session from 'express-session';
import morgan from 'morgan';

declare global {
    namespace Express {
        interface User {
            id: number;
        }
    }
}

// app config
const app = express();

// middlewares
app.use(morgan('common'))

// routing
app.use('/api', apiRouter)

// errors
app.use(notFound);
app.use(error);

app.listen(config.get('app.port'), () => {
    console.log(`${config.get('app.name')} with secret ${config.get('app.secret')} started on ${config.get('app.port')}`)
})
