const express = require('express');
const { verifyId, verifyName } = require('../middlewares/verifications');
const { getProductById, getAllProducts, createProduct } = require('../controllers/products');
const { registrySales } = require('../controllers/registrySales')

const router = express.Router();

// Routes about products
router.get('/products/:id', verifyId, getProductById);
router.get('/products', getAllProducts);
router.post('/products', verifyName, createProduct);

// Routes about sales
router.post('/sales', registrySales);

module.exports = { router };
