module.exports = (req, res, next) => {
    const authError = {
        status: 401,
        message: 'not authorized'
    }

    const authHeader = req.get('Authorization');
    // const authHeader = req.headers.Authorization;

    if (!authHeader) next(authError);

    const parts = authHeader.split(' ');

    if (parts.length !== 2) next(authError);

    if (parts[0] !== 'Bearer') next(authError);

    if (parts[1] !== '123') next(authError);

    next()

}