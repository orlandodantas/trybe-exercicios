require('express-async-errors');

const errorMiddleware = (err, _req, res, _next) => {
  if (err.isJoi) return res.status(400).json({ error: { message: err.message } });

  if (err.statusCode) return res.status(err.statusCode).json({ error: { message: err.message } });

  console.log(err);
  res.status(500).json({ error: { message: 'Erro no servidor' } });
};

module.exports = {
  errorMiddleware,
};
