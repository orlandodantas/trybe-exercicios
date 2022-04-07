const jwt = require('jsonwebtoken');
const { validateFields, isAdmin } = require('./validations/login');
const { jwt: { secret } } = require('../config/config');

const create = (dataLogin) => {
  const { username } = dataLogin;

  validateFields(dataLogin);

  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  const payload = {
    user: username,
    admin: isAdmin(dataLogin),
  };

  const token = jwt.sign(payload, secret, jwtConfig);

  return {
    token,
  };
};

module.exports = {
  create,
};
