const jwt = require('jsonwebtoken');
const { jwt: { secret } } = require('../config/config');

const auth = (req, res, next) => {
  const { authorization: token } = req.headers;

  if (!token) {
    return res.status(401).json({
      error: {
        message: 'Token not found',
      },
    }); 
  }

  const decoded = jwt.verify(token, secret);

  req.dataUser = {
    user: decoded.user,
    admin: decoded.admin,
  };

  next();
};

module.exports = {
  auth,
};