const connection = require('./connection');
require('dotenv').config();

const listProducts = async () => {
  const [data] = await connection.query('SELECT * FROM StoreManager.products');
  return data;
};

const insertProduct = async (name) => {
  const [query] = await connection.execute('INSERT INTO products (name) VALUES (?)', [name]);
  return query.affectedRows;
};

const getLastProduct = async () => {
  const [[response]] = await connection.query(
    'SELECT * FROM StoreManager.products ORDER BY id DESC limit 1',
  );
  return response;
};

const createProduct = async (name) => {
  await insertProduct(name);
  return await getLastProduct();
};

module.exports = { listProducts, createProduct, insertProduct, getLastProduct };
