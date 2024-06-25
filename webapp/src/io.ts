import { Server } from "socket.io";
import config from 'config';
import { v4 } from "uuid";

const io = new Server({
    cors: {
        origin: "*"
    }
});

const clients = [];
io.on('connection', (socket) => {
    const id = v4();
    clients.push(id)
    console.log(`recevied a new connection with id: ${id}`)

    socket.emit('new id', {
        id
    })

    socket.on('ack id', () => {
        console.log('id acknowlegde')
        io.emit('new user', {
            id,
            count: clients.length
        })
    })

    socket.on('disconnect', () => {
        console.log('client disconnected')
    })
})

io.listen(config.get('io.port'));
console.log('io server started')