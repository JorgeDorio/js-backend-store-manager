const services = require('../services/products');
const { OK, CREATED } = require('../HTTP_STATUS');

const getProductById = async (req, res) => {
  const { data } = req;
  return res.status(OK).json(data);
};

const getAllProducts = async (req, res) => {
  const data = await services.listProducts();
  return res.status(OK).json(data);
};

const createProduct = async (req, res) => {
  const data = req.body;
  const response = await services.createProduct(data);
  return res.status(CREATED).json(response);
};

module.exports = {
  getProductById,
  getAllProducts,
  createProduct,
};
