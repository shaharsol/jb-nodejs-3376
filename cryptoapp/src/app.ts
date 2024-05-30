import config from 'config';
import express from 'express';
import usersRouter from './routers/users';
import path from 'path';
import notFound from './middlewares/error/404';
import error from './middlewares/error/error';

// app config
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'))

// routing
app.use('/users', usersRouter)

// errors
app.use(notFound);
app.use(error);

app.listen(config.get('app.port'), () => {
    console.log(`${config.get('app.name')} with secret ${config.get('app.secret')} started on ${config.get('app.port')}`)
})
