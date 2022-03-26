const express = require('express');
const userPost = require('./controllers/users/userPost');

const app = express();

app.use('/user', userPost);

const PORT = 3001;
app.listen(PORT, () => console.log(`Express rodando na porta ${PORT}`));