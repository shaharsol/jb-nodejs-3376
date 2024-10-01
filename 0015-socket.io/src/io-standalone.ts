// import { createServer } from "http";
import { Server } from "socket.io";
import Chance from 'chance';

// const httpServer = createServer();
const io = new Server({
  cors: {
    origin: "*"
  }
});

const chance = new Chance();
io.on('connection', (socket) => {
  const id = chance.string({
    length: 5,
    pool: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  });
  console.log(`a user connected: ${id}`);
  socket.emit('welcome', {id})
  io.emit('new user joined',{id});
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});
io.listen(3033)