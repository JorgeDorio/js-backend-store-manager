const connection = require('./connection');
require('dotenv').config();

const modelListAllProducts = async () => {
  const [data] = await connection.query('SELECT * FROM StoreManager.products');
  console.log(data);
  return data;
};

module.exports = {
  modelListAllProducts,
};
