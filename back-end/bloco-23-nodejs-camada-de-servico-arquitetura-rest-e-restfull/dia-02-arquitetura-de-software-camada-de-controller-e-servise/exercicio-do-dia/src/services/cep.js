const {validateCEP, createError} = require('../helpers/helper');
const cepModel = require('../models/cep');

const getByCEP = async (cep) => {
  const cepValided = validateCEP(cep);

  if (!cepValided) {
    const newError = createError('CEP inválido', 'invalidData', 400);

    throw newError;
  }

  const endereco = await cepModel.getByCEP(cep);

  if (!endereco) {
    const newError = createError('CEP não encontrado', 'notFound', 404);

    throw newError;
  }

  return endereco;
};

module.exports = {
  getByCEP,
}
