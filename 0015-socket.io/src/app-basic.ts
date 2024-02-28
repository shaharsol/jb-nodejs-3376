import express from 'express';
import { createServer } from 'http';
import { Server } from "socket.io";
import path from 'path';

const app = express();
const server = createServer(app);
const io = new Server(server);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
