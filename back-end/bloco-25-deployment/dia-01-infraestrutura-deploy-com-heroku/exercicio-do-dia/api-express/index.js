const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());

app.get('/', (_req, res) => {
  res.status(200).send(process.env.MENSAGEM);
});

app.get('/ambiente', (_req, res) => {
  res.status(200).send(`Você está no ambiente ${process.env.AMBIENTE}`);
  console.log('Olá');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
