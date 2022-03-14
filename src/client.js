const { HOST, PORT } = require('./config');
const net = require('net');
const fs = require('fs');

async function runClient() {

    const client = net.createConnection({ host: HOST, port: PORT }, () => {
        console.log('✅ Connected to the server.');
    });
    
    const body = fs.createReadStream('./src/data/send.txt');
    body.pipe(client);

    client.on('end', () => {
        console.log('❌ Disconnected from the server.');
    });
}

runClient()