import { Server } from "socket.io";
import config from 'config';

const io = new Server({
    cors: {
        origin: "*"
    }
});

io.on('connection', (socket) => {
    console.log('recevied a new connection')

    socket.on('disconnect', () => {
        console.log('client disconnected')
    })
})

io.listen(config.get('io.port'));
console.log('io server started')