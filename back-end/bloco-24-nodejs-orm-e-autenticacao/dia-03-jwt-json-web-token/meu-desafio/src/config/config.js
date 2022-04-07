require('dotenv').config();

const config = {
  mysql: {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  },
  api: {
    PORT: process.env.PORT,
  },
  jwt: {
    secret: 'supersecret',
  },
};

module.exports = {
  ...config,
};
