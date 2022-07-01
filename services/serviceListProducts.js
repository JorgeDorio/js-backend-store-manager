const { modelListAllProducts } = require('../models/modelListProducts');

const serviceListProducts = async (id) => {
  let data = await modelListAllProducts();

  if (id !== undefined) {
    [data] = data.filter((product) => Number(product.id) === Number(id));
  }

  return data;
};

module.exports = serviceListProducts;
