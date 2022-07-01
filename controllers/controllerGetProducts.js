const { serviceListProducts } = require('../services/serviceListProducts');
const { OK } = require('../HTTP_STATUS')

const getProductById = async (req, res) => {
  const data = req.data;
  return res.status(OK).json(data);
}

const getAllProducts = async (_req, res) => {
  const data = await serviceListProducts();
  return res.status(OK).json(data);
}

module.exports = {
  getProductById,
  getAllProducts
}
