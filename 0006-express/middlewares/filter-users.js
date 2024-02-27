module.exports = (req, res, next) => {
    try {
      const offset = req.query.offset || 0;
      const limit = req.query.limit || 2;
      req.data = req.data.slice(offset, limit);
      next();
    } catch (err) {
      next(err);
    }
  }