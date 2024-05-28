const { createServer } = require('http');

const PORT = '8080';

const requestListener = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const data = { schoolName: 'John Bryce' };
    res.writeHead(200);
    res.end(JSON.stringify(data));
    // res.end('hello');
};

const server = createServer(requestListener);

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
