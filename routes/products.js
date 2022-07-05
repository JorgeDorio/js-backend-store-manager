const express = require('express');
const { verifyId } = require('../middlewares/verifyId');
const { getProductById, getAllProducts } = require('../controllers/products');

const router = express.Router();

router.get('/products/:id', verifyId, getProductById);

router.get('/products', getAllProducts);

module.exports = { router };
