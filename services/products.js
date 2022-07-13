const model = require('../models/products');

const listProducts = async (id) => {
  let data = await model.listProducts();

  if (id !== undefined) {
    [data] = data.filter((product) => Number(product.id) === Number(id));
  }

  return data;
};

const createProduct = async (data) => {
  const { name } = data;
  const response = await model.createProduct(name);
  return response;
};

const updateProduct = async (name, id) => {
  const response = await model.updateProduct(name, id);
  return response;
};

module.exports = { listProducts, createProduct, updateProduct };
