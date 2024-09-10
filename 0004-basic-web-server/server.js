const { createServer } = require('http');

const PORT = '8080';
const HOST = 'localhost'

const object = { company: 'Migdal'}

const requestListener = function (req, res) {
    res.setHeader('Content-Type', 'application/json')
    res.writeHead(200);
    res.end(JSON.stringify(object));
};

const server = createServer(requestListener);

server.listen(PORT, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});
