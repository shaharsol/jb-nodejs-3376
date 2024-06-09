import config from "config";
import express from "express";
import usersRouter from './routers/users'

const app = express();

app.use('/users', usersRouter);

app.listen(config.get('app.port'), () => {
    console.log(`${config.get('app.name')} with awsToken ${config.get('app.awsToken')} started on http://localhost:${config.get('app.port')}`)
})