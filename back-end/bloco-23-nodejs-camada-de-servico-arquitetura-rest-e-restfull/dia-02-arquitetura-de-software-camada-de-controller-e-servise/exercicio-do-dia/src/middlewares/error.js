require('express-async-errors'); // Esse middleware trata erros assíncronos;

const error = (err, _req, res, _next) => {

  // Se for um erro do Joi, sabemos que trata-se de um erro de validação.
  if (err.isJoi) {
    return res.status(400).json({ error: { message: err.details[0].message } });
  }

  // Verifica se é um erro de domínio (erro causado por intensão).
  if (err.status && err.code) {
    return res.status(err.status).json({ error: { code: err.code, message: err.message } });
  }

  // Caso não seja nem uma das anteriores retorna o erro de servidor.
  res.status(500).json({ error: { message: err.message } });
};

module.exports = error;
