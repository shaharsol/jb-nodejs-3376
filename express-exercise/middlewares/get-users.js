const axios = require('axios')

module.exports = async (req, res, next) => {
    try {
        const response = await axios('https://jsonplaceholder.typicode.com/users');
        req.data = response.data
        next()
    } catch (err) {
        next(err)
    }
}