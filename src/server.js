const { HOST, PORT } = require('./config');
const net = require('net');
const fs = require('fs');

async function runServer() {
    const file = fs.createWriteStream('./src/data/receive.txt')

    net.createServer(function(socket) {
        socket.on('connect', () => {
            console.log('✅ New connection')
        })

        socket.on('close', () => {
            console.log('❌ Connection closed')
        })

        socket.on('data', (data) => {
            const str = data.toString();
            file.write(str);
            file.close();
            
        })
    }).listen(PORT, HOST);
}

runServer()