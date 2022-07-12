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
  const lastProduct = await getLastProduct();
  return lastProduct;
};

const getProductById = async (ids) => {
  let query;
  let products = [];
  for (const id of ids) {
    [[query]] = await connection.query('SELECT id FROM StoreManager.products WHERE id = ?', [id]);
    products.push(query);
  }
  products = products.filter((product) => product === undefined);
  return products.length;
};

module.exports = { listProducts, getProductById, createProduct, insertProduct, getLastProduct };
