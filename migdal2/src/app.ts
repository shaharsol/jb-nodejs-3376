import express, { Request, Response } from 'express'
import config from 'config'
import path from 'path'
import usersRouter from './routers/users'

const port = config.get<number>('app.port')
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'views'))

app.use('/users', usersRouter)

app.listen(port, () => {
    console.log(`app started on http://localhost:${port}`)
})



