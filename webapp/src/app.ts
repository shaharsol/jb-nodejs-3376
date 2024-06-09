import * as express from "express";

const app = express();

app.listen(3000, () => {
    console.log('app started on http://localhost:3000')
})