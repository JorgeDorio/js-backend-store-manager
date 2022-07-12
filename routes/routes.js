const express = require('express');
const { verifyId, verifyName } = require('../middlewares/productsValidations');
const { getProductById, getAllProducts, createProduct } = require('../controllers/products');
const { registrySales } = require('../controllers/registrySales');
const { verifySaleId,
  verifySaleQuantity,
  verifyIfProductExists,
} = require('../middlewares/salesValidations');

const router = express.Router();

// Routes about products
router.get('/products/:id', verifyId, getProductById);
router.get('/products', getAllProducts);
router.post('/products', verifyName, createProduct);

// Routes about sales
router.post('/sales', verifySaleId, verifySaleQuantity, verifyIfProductExists, registrySales);

module.exports = { router };
