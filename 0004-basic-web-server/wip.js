const http = require('http');

const PORT = '8080';

const requestListener = function (req, res) {

    // check credentials in req
    // res.writeHead(401).end()

    switch (req.url) {
        case '/json':
            // connect to mongodb
            switch (req.method) {
                case 'GET':
                    res.setHeader('Content-Type', 'application/json');
                    // read user id from mongo db
                    const data = { schoolName: 'John Bryce' };
                    res.writeHead(200);
                    res.end(JSON.stringify(data));
                    break;
                case 'POST':
                    res.writeHead(200);
                    res.end('saving json file...');
                    break;
                default:
                    res.writeHead(405);
                    res.end('only GET and POST for this endpoint...');
                    break;
            }
            // connect to mongodb

            break;
        case '/csv':

            // connect to my MySQL

            switch (req.method) {
                case 'GET':

                    // read data from MySQL
                    // convert to csv fomat

                    res.setHeader('Content-Type', 'text/csv');
                    res.setHeader('Content-Disposition', 'attachment;filename=johnbryce.csv')
                    res.writeHead(200);
                    res.end('id,name,age\n12345678,shahar,47');
                    break;
                case 'POST':
                    res.writeHead(200);
                    res.end('saving csv file...');
                    break;
                default:
                    res.writeHead(405);
                    res.end('only GET and POST for this endpoint...');
                    break;
            }
            
            // disconnect to my MySQL
            
            break;
        default:
            res.writeHead(404);
            res.end('the page you requested was not found')
            break;
    }

    // log response status
};

const server = http.createServer(requestListener);

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
