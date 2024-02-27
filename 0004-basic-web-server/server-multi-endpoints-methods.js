const { createServer } = require('http');

const PORT = '8080';

const requestListener = function (req, res) {
    console.log(req);
    if (req.url === '/name' && req.method === 'POST') {
        res.writeHead(200);
        return res.end("name endpoint");
    }

    if (req.url === '/age' && req.method === 'GET') {
        res.writeHead(200);
        return res.end("age endpoint");
    }

    res.writeHead(404);
    return res.end("not found");
};

const server = createServer(requestListener);

server.listen(PORT, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});
