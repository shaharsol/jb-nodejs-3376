const http = require('http');

const PORT = '8080';

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("My first node web server!");
};

const server = http.createServer(requestListener);

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
