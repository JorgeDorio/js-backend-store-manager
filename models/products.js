const connection = require('./connection');
require('dotenv').config();

const listProducts = async () => {
  const [data] = await connection.query('SELECT * FROM StoreManager.products');
  return data;
};

const createProduct = async (name) => {
  await connection.query('INSERT INTO products (name) VALUES (?)', [name]);
  const [[response]] = await connection.query(
    'SELECT * FROM StoreManager.products ORDER BY id DESC limit 1',
  );
  return response;
};

module.exports = { listProducts, createProduct };
