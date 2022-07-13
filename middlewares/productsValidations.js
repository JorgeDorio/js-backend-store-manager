const services = require('../services/products');
const { NOT_FOUND, BAD_REQUEST, UNPROCESSABLE_ENTITY } = require('../HTTP_STATUS');

const verifyProductId = async (req, res, next) => {
  const { id } = req.params;
  const data = await services.listProducts();
  [req.data] = data.filter((product) => Number(product.id) === Number(id));
  if (req.data === undefined) return res.status(NOT_FOUND).json({ message: 'Product not found' });
  next();
};

const verifyName = async (req, res, next) => {
  const { name } = req.body;
  if (name === undefined) {
    return res.status(BAD_REQUEST).json({ message: '"name" is required' });
  } if (name.length < 5) {
    return res.status(UNPROCESSABLE_ENTITY).json({
      message: '"name" length must be at least 5 characters long',
    });
  }
  next();
};

module.exports = { verifyProductId, verifyName };
