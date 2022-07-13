const services = require('../services/products');
const { OK, CREATED } = require('../HTTP_STATUS');

const getProductById = async (req, res) => {
  const { data } = req;
  return res.status(OK).json(data);
};

const getAllProducts = async (_req, res) => {
  const data = await services.listProducts();
  return res.status(OK).json(data);
};

const createProduct = async (req, res) => {
  const data = req.body;
  const response = await services.createProduct(data);
  return res.status(CREATED).json(response);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const [response] = await services.updateProduct(name, id);
  return res.status(200).json(response);
};

module.exports = {
  getProductById,
  getAllProducts,
  createProduct,
  updateProduct,
};
