const auth = (req, res, next) => {
    const unauthorized = () => {
        next({
          code: 401,
          message: 'unauthorized',
        });
    };

    const header = req.headers.authorization; // struct is Bearer token

    if (!header) {
        unauthorized();
    }
    const parts = header.split(' ');
    const apiKey = parts[1];

    if (!apiKey) {
        unauthorized();
    }

    if (apiKey != '123') {
        unauthorized();
    } else {
        next();
    }


}

const CONSTANT = 1;

module.exports = {
    auth,
    CONSTANT
}
