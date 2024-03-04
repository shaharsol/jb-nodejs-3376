const { createServer } = require('http');

const requestListener = (req, res) => {

    // check credentials in request
    // res.status(401)

    switch (req.url) {
        case '/csv':

            // connect to mongo
            // res.status(500)           

            switch (req.method) {
                case 'GET':

                    const csv = `id,name,age
                    123456789,Israel Israeli,50
                    74564376543,Moshe Moshe,30`;

                    // convert json from mongo to csv

                    res.setHeader('Content-type', 'text/csv');
                    res.setHeader('Content-Disposition', 'attachment;filename=johnbryce.csv')
                    res.writeHead(200);
                    res.end(csv);
                    break;
                case 'POST':
                    res.writeHead(201);
                    res.end('saving csv...');
                    break;
                default:
                    res.writeHead(405);
                    res.end('not allowed');
                    break;
            }

            // disconnet from mongo

            break;
        case '/json':

            // connect to mysql
            // res.status(500)

            switch (req.method) {
                case 'GET':
                    const json = {schoolName: 'John Bryce'};
                    res.setHeader('Content-type', 'application/json');
                    res.writeHead(200);
                    res.end(JSON.stringify(json));
                    break;
                case 'POST':
                    res.writeHead(201);
                    res.end('saving json...');
                    break;
                default:
                    res.writeHead(405);
                    res.end('not allowed');
                    break;
            }
            break;
        default:
            res.writeHead(404);
            res.end('not found');
            break;
    }

    // log req.method, req.url, and res.status
}

const server = createServer(requestListener);

server.listen(8080, () => {
    console.log('started...')
})