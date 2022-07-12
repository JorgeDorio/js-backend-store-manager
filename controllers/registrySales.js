const { CREATED } = require('../HTTP_STATUS');
const services = require('../services/sales');

const registrySales = async (req, res) => {
  const data = req.body;
  const response = await services.registrySales(data);
  res.status(CREATED).json(response);
};

module.exports = { registrySales };
