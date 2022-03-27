const express = require('express');
const errorMiddleware = require('./middlewares/error');
const routerCEP = require('./routers/cep');
require('dotenv').config();

const app = express();
app.use(express.json());

app.get('/ping', (req, res) => {
  res.status(200).json({ "message": "pong!" });
});

app.use('/cep', routerCEP);

app.use(errorMiddleware);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Online on port ${PORT}`));
