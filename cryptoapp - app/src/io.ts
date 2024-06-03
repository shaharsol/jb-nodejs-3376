import config from 'config';
import { Server } from 'socket.io';
import { v4 } from 'uuid';

const io = new Server({
    cors: {
        origin: "*"
    }
});

const clients = [];

io.on('connection', socket => {
    console.log('new connection')
    socket.on('new message from worker', message => {
        console.log('new message from worker', message)
        io.emit('symbol value update', message)
    })
})

io.listen(config.get('io.port'));
console.log(`io server started on ${config.get('io.port')}`)