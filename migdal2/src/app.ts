import express, { Request, Response, urlencoded } from 'express'
import config from 'config'
import path from 'path'
import usersRouter from './routers/users'
import notFound from './middlewares/not-found'
import errorHandler from './middlewares/error/error-handler'
import errorLogger from './middlewares/error/error-logger'

const port = config.get<number>('app.port')
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'views'))

// common middlewares

// routers
app.use('/users', usersRouter)

// 404 special middleware
app.use(notFound)

// error middlewares
app.use(errorLogger)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`app started on http://localhost:${port}`)
})



