import express from 'express';
import { createServer } from 'http';
import { Server } from "socket.io";
import path from 'path';
import Chance from 'chance';

const app = express();
const server = createServer(app);
const io = new Server(server);
const chance = new Chance();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index-emit');
});

io.on('connection', (socket) => {
  const id = chance.string({
    length: 5,
    pool: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  });
  console.log(`a user connected: ${id}`);
  socket.emit('new user joined',{id: 'welcome'})
  io.emit('new user joined',{id});
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
