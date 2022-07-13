const express = require('express');
const { verifyName, verifyProductId } = require('../middlewares/productsValidations');
const { getProductById, getAllProducts, createProduct } = require('../controllers/products');
const { registrySales, getAllSales, getSaleById } = require('../controllers/registrySales');
const { verifySaleId,
  verifySaleQuantity,
  verifyIfProductExists,
  verifySaleById,
} = require('../middlewares/salesValidations');

const router = express.Router();

// Routes about products
router.get('/products/:id', verifyProductId, getProductById);
router.get('/products', getAllProducts);
router.post('/products', verifyName, createProduct);

// Routes about sales
router.get('/sales/:id', verifySaleById, getSaleById);
router.post('/sales', verifySaleId, verifySaleQuantity, verifyIfProductExists, registrySales);
router.get('/sales', getAllSales);

module.exports = router;
