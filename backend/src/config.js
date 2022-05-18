const { config } = require('dotenv');
config();

const server = {
  port: process.env.SERVER_PORT || 4000
};

const db = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT
};

module.exports = {
  db,
  server
};