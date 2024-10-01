import { Server } from 'socket.io'
import config from 'config'

const io = new Server({
    cors: {
      origin: "*"
    }
});

io.on('connection', (socket) => {
    console.log('user connected')

    socket.on('new-symbol-value-from-worker', (data) => {
        console.log('received message from worker', data)
        io.emit('new-symbol-value-from-io-server', data)
    })

})

io.listen(config.get<number>('io.port'))
console.log(`io server started on port ${config.get<number>('io.port')}`)