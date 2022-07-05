const services = require('../services/products');
const { NOT_FOUND } = require('../HTTP_STATUS');

const verifyId = async (req, res, next) => {
  const { id } = req.params;
  const data = await services.listProducts();
  [req.data] = data.filter((product) => Number(product.id) === Number(id));
  if (req.data === undefined) return res.status(NOT_FOUND).json({ message: 'Product not found' });
  next();
};

module.exports = { verifyId };
