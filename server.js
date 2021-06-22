const express = require('express');
const PORT = process.env.PORT || 3001;
const axios = require('axios').default;

const serverUrl  = 'http://localhost:3000/api/sample?data=';


const server = express()
    .listen(PORT, () => console.log(`Listening on ${PORT}`));


const { Server } = require('ws');
const wss = new Server({ server });


wss.on('connection', (ws) => {
    console.log('Client connected');
    ws.on('close', () => console.log('Client disconnected'));

    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
        axios.get(serverUrl + message);
    });

});


