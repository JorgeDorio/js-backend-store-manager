const express = require('express');
const midVerifyId = require('../middlewares/midVerifyId');
const { getProductById, getAllProducts } = require('../controllers/controllerGetProducts')

const router = express.Router();

router.get('/products/:id', midVerifyId, getProductById);

router.get('/products', getAllProducts);

module.exports = { router };
