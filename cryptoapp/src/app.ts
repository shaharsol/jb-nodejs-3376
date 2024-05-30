import config from 'config';
import express from 'express';


const app = express();

app.listen(config.get('app.port'), () => {
    console.log(`${config.get('app.name')} with secret ${config.get('app.secret')} started on ${config.get('app.port')}`)
})
