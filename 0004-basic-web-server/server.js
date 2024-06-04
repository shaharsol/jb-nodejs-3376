const http = require('http');

const PORT = '8080';

const requestListener = function (req, res) {

    // log any incoming request

    switch (req.url) {
        case '/json':

            // connect to mysql

            switch(req.method) {
                case 'GET':

                    // check authorization

                    // send JSON to client
                    const data = {schoolName: 'John Bryce'}
                    res.setHeader('Content-type', 'application/json')
                    res.writeHead(200);
                    res.end(JSON.stringify(data));
                    break;
                case 'POST':
                    res.writeHead(201);
                    res.end('saving json...');
                    break;
                default: 
                    res.writeHead(405);
                    res.end('supporting only GET and POST');
                    break;
            }

            // disconnect mysql

            break;
            
        case '/csv':

            // connect mongoose
            switch(req.method) {
                case 'GET':
                    // send CSV to client
                    const csv = 'id,name,age\n123456789,israel israeli,50';
                    res.setHeader('Content-type', 'text/csv')
                    res.setHeader('Content-disposition', 'attachment;filename=migdal.csv')
                    res.writeHead(200);
                    res.end(csv);
                    break;
                case 'POST':
                    res.writeHead(201);
                    res.end('saving csv...');
                    break;
                default:
                    res.writeHead(405);
                    res.end('supporting only GET and POST');
                    break;
            }
            
            break;
        default:
            res.writeHead(404);
            res.end('not found')
            break;
    }
};

const server = http.createServer(requestListener);

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
