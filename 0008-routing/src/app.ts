import express from 'express';
import basicRouter from './routers/basic-router';
import routerWithMiddlewares from './routers/router-with-middlewares'

const server: string = express();

server.use('/basic-router', basicRouter);
server.use('/router-with-middlewares', routerWithMiddlewares);

server.listen(8080, () => {
    console.log('started...')
});