require('http').createServer((req, res) => {
    res.writeHead(200).end('My first minimal node web server!');
}).listen('8080');
