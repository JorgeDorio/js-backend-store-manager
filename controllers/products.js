const services = require('../services/products');
const { OK } = require('../HTTP_STATUS');

const getProductById = async (req, res) => {
  const { data } = req;
  return res.status(OK).json(data);
};

const getAllProducts = async (_req, res) => {
  const data = await services.listProducts();
  return res.status(OK).json(data);
};

module.exports = {
  getProductById,
  getAllProducts,
};
