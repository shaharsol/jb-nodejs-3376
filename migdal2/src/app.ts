import express from 'express'
import config from 'config'

const port = config.get<number>('app.port')
const app = express()

app.listen(port, () => {
    console.log(`app started on http://localhost:${port}`)
})



