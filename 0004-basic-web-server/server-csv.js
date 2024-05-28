const { createServer } = require('http');

const PORT = '8080';

const requestListener = function (req, res) {
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment;filename=johnbryce.csv')
    res.writeHead(200);
    res.end('id,name,age\n12345678,shahar,47');
};

const server = createServer(requestListener);

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
