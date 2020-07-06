//Require all dependencies
const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const router = require('./router');

//Specify port and in the process environment cos of deployment
const PORT = process.env.PORT || 5000;
//Call the dependencies and enclose them in the socket.io for realtime instant messaging

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    console.log('We have a new connection');

    socket.on('disconnect', () => {
        console.log('User has left');
    });
});


//listen to changes and ensure the app is running
app.use(router);
server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));