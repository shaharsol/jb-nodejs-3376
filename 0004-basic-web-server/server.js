const { createServer } = require('http');

const PORT = '8080';
const HOST = 'localhost'

const object = { company: 'Migdal'}
const csv = 'firstname,lastname,age\nshahar,solomianik,49\nisrael,israeli,33'

const requestListener = function (req, res) {

    // log request to some log file

    switch (req.url) {
        case '/json':

            // connect mongodb

            switch(req.method) {
                case 'GET':
                    res.setHeader('Content-Type', 'application/json')
                    res.writeHead(200);
                    res.end(JSON.stringify(object));
                    break;
                case 'POST':
                    res.writeHead(201)
                    res.end('saving json')
                    break;
                default:
                    res.writeHead(405);
                    res.end()
            }

            // diconnect from mongo

            break;
        case '/csv':

            // connect mysql

            switch (req.method) {
                case 'GET':
                    res.setHeader('Content-Type', 'text/csv')
                    res.setHeader('content-disposition', 'attachment;filename=migdal.xls')
                    res.writeHead(200);
                    res.end(csv);
                    break;
                case 'POST':
                    res.writeHead(201)
                    res.end('saving csv')
                    break;
                default:
                    res.writeHead(405);
                    res.end()
            }

            // disconnect mysql

            break;
        default:
            res.writeHead(404);
            res.end();
    }

    // log the response status to some log file
};

const server = createServer(requestListener);

server.listen(PORT, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});
