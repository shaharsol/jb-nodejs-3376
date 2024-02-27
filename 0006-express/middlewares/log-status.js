const logStatus = (req, res, next) => {
    // if (req.method === 'POST') {
        res.on('finish', () => {
            console.log(`POST to ${req.url} ended with status ${res.statusCode}`)
        })
    // }
    next();
}
module.exports = logStatus;