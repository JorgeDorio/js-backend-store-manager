const express = require('express');
const serviceListProducts = require('../services/serviceListProducts');
const { OK } = require('../HTTP_STATUS');
const midVerifyId = require('../middlewares/midVerifyId');

const router = express.Router();

router.get('/products/:id', midVerifyId, async (req, res) => {
  const { data } = req;
  res.status(OK).json(data);
});

router.get('/products', async (_req, res) => {
  const data = await serviceListProducts();
  res.status(OK).json(data);
});

module.exports = { router };
