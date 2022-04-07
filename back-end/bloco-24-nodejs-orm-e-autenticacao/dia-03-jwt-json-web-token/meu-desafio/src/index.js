const express = require('express');
const { api: { PORT } } = require('./config/config');
const loginRouter = require('./Routers/login');
const usersRouter = require('./Routers/users');
const { errorMiddleware } = require('./middlewares/errorMiddleware');

const app = express();
app.use(express.json());

app
  .use('/login', loginRouter)
  .use('/users', usersRouter);

app.use(errorMiddleware);
app.listen(PORT, () => console.log(`Online on PORT ${PORT}`));
