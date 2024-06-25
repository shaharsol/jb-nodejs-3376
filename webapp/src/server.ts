import app from "./app";
import config from 'config';

// starting
app.listen(config.get('app.port'), () => {
    console.log(`${config.get('app.name')} with awsToken ${config.get('app.awsToken')} started on http://localhost:${config.get('app.port')}`)
})