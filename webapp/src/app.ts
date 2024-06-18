import config from "config";
import express from "express";
import usersRouter from './routers/users'
import path from "path";
import { notFound } from "./middlewares/not-found";
import { errorLogger } from "./middlewares/error/errorLogger";
import { errorHandler } from "./middlewares/error/errorHandler";

const app = express();

// app setting
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'))

// middlewares

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