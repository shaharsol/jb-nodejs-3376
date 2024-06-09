import config from "config";
import express from "express";
import usersRouter from './routers/users'
import path from "path";

const app = express();

// app setting
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'))

// middlewares

// routing
app.use('/users', usersRouter);

// starting
app.listen(config.get('app.port'), () => {
    console.log(`${config.get('app.name')} with awsToken ${config.get('app.awsToken')} started on http://localhost:${config.get('app.port')}`)
})