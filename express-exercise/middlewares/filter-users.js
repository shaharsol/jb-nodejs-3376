module.exports = (req, res, next) => {
    req.data = req.data.slice(req.query.offset || 0, req.query.limit || 2)
    next()
}