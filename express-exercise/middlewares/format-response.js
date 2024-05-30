const { toXML } = require('jstoxml')

module.exports = (req, res, next) => {
    if (req.query.format === 'xml') {
        const xml = toXML(req.data);
        res.setHeader('Content-type', 'text/xml')
        return res.send(xml);
    }
    res.json(req.data)
}