module.exports = (err, req, res, next) => {
    res.status(err.status || 500).send(err.message || 'something bad happened....')
}