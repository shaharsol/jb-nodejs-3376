const http = require('http');

const PORT = '8080';

const requestListener = function (req, res) {
    switch (req.url) {
        case '/json':
            res.setHeader('Content-Type', 'application/json');
            const data = { schoolName: 'John Bryce' };
            res.writeHead(200);
            res.end(JSON.stringify(data));
            break;
        case '/csv':
            res.setHeader('Content-Type', 'text/csv');
            res.setHeader('Content-Disposition', 'attachment;filename=johnbryce.csv')
            res.writeHead(200);
            res.end('id,name,age\n12345678,shahar,47');
            break;
        default:
            res.writeHead(404);
            res.end('the page you requested was not found')
            break;
    }
};

const server = http.createServer(requestListener);

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
