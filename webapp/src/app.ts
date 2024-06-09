import config from "config";
import express from "express";

const app = express();

app.listen(config.get('app.port'), () => {
    console.log(`app started on http://localhost:${config.get('app.port')}`)
})