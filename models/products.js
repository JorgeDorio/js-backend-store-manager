const connection = require('./connection');
require('dotenv').config();

const listProducts = async () => {
  const [data] = await connection.query('SELECT * FROM StoreManager.products');
  return data;
};

module.exports = { listProducts };
