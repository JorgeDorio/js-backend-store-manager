const connection = require('./connection');
require('dotenv').config();

const listProducts = async () => {
  const [data] = await connection.query('SELECT * FROM StoreManager.products');
  return data;
};

const insertProduct = async (name) => {
  const [response] = await connection.execute('INSERT INTO products (name) VALUES (?)', [name]);
  return response.affectedRows;
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
  const querys = ids.map((id) => connection.query(
    'SELECT id FROM StoreManager.products WHERE id = ?',
    [id],
));
  const resolvingPromises = await Promise.all(querys);
  const destructuring = resolvingPromises.map((query) => query[0]);
  const getUnvalids = destructuring.filter((product) => product.length === 0);
  return getUnvalids.length;
};

module.exports = { listProducts, getProductById, createProduct, insertProduct, getLastProduct };
