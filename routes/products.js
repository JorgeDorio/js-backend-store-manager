const express = require('express');
const { verifyId, verifyName } = require('../middlewares/verifications');
const { getProductById, getAllProducts, createProduct } = require('../controllers/products');

const router = express.Router();

router.get('/products/:id', verifyId, getProductById);
router.get('/products', getAllProducts);
router.post('/products', verifyName, createProduct);

module.exports = { router };
