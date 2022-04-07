const loginService = require('../services/login');

/* POST */
const create = (req, res) => {
  const result = loginService.create(req.body);

  res.status(200).json(result);
};

module.exports = {
  create,
};
