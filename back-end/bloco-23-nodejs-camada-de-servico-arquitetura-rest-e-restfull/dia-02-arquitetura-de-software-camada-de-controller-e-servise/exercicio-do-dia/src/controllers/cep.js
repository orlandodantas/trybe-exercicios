const cepService = require('../services/cep');
const rescue = require('express-rescue');

const getByCEP = rescue(async (req, res, _next) => {
  const { cep } = req.params;

  const endereco = await cepService.getByCEP(cep);

  res.status(200).json(endereco);
});

module.exports = {
  getByCEP,
};
