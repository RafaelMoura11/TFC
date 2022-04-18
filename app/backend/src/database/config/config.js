require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.DB_USER || 'root',
    "password": process.env.DB_PASS || 'admin',
    "database": process.env.DB_NAME || 'TRYBE_FUTEBOL_CLUBE',
    "host": process.env.DB_HOST || 'localhost',
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.DB_USER || 'root',
    "password": process.env.DB_PASS || 'admin',
    "database": process.env.DB_NAME || 'TRYBE_FUTEBOL_CLUBE',
    "host": process.env.DB_HOST || 'localhost',
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DB_USER || 'root',
    "password": process.env.DB_PASS || 'admin',
    "database": process.env.DB_NAME || 'TRYBE_FUTEBOL_CLUBE',
    "host": process.env.DB_HOST || 'localhost',
    "dialect": "mysql"
  }
}
