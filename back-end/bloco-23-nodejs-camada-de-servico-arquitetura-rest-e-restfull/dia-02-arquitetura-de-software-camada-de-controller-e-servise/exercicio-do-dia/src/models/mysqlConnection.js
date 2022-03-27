const mysql = require('mysql2/promise');

require('dotenv').config();

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DB_NAME,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  port: 3306,
});

module.exports = connection;
