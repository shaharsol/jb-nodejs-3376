import config from 'config';
import express from 'express';
import usersRouter from './routers/users';
import path from 'path';


const app = express();
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'))

app.use('/users', usersRouter)

app.listen(config.get('app.port'), () => {
    console.log(`${config.get('app.name')} with secret ${config.get('app.secret')} started on ${config.get('app.port')}`)
})
