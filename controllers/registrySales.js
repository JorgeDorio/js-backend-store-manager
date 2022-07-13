const { CREATED, OK } = require('../HTTP_STATUS');
const services = require('../services/sales');

const registrySales = async (req, res) => {
  const data = req.body;
  const response = await services.registrySales(data);
  res.status(CREATED).json(response);
};

const getAllSales = async (_req, res) => {
  const data = await services.listSales();
  return res.status(OK).json(data);
};

const getSaleById = async (req, res) => {
  const { id } = req.params;
  const data = await services.listSales(id);
  return res.status(OK).json(data);
};

module.exports = { registrySales, getAllSales, getSaleById };
