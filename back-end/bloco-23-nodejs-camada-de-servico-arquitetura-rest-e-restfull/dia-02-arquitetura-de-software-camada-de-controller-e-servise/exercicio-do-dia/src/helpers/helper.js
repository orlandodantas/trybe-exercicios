const validateCEP = (cep) => /\d{5}-?\d{3}/.test(cep);

const createError = (message, code, status = 500) => {
  const newError = new Error(message);
  newError.code = code;
  newError.status = status;

  return newError;
}

module.exports = {
  validateCEP,
  createError,
}
