const { BAD_REQUEST, UNPROCESSABLE_ENTITY } = require('../HTTP_STATUS');
const model = require('../models/products');

const verifySaleId = (req, res, next) => {
  const data = req.body;
  const unvalidIds = data.filter((product) => product.productId === undefined
    || typeof (product.productId) !== 'number');
  if (unvalidIds.length > 0) {
    return res.status(BAD_REQUEST).json({ message: '"productId" is required' });
  }
  next();
};

const verifySaleQuantity = (req, res, next) => {
  const data = req.body;
  const unvalidQuantitys = data.filter(
    (product) => product.quantity === undefined || typeof (product.quantity) !== 'number',
);
  const negativesQuantitys = data.filter((product) => product.quantity <= 0);
  if (unvalidQuantitys.length > 0) {
    return res.status(BAD_REQUEST).json({ message: '"quantity" is required' });
  } if (negativesQuantitys.length > 0) {
    return res.status(UNPROCESSABLE_ENTITY).json({
      message: '"quantity" must be greater than or equal to 1',
    });
  }

  next();
};

const verifyIfProductExists = async (req, res, next) => {
  const data = req.body;
  const ids = data.map((product) => product.productId);
  const products = await model.getProductById(ids);
  if (products) {
    return res.status(404).json({ message: 'Product not found' });
  }
  next();
};

module.exports = { verifySaleId, verifySaleQuantity, verifyIfProductExists };
