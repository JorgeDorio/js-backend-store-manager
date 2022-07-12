const services = require('../services/sales');

const registrySales = async (req, res) => {
  const data = req.body;
  const response = await services.registrySales(data);
  res.status(201).json(response);
};

module.exports = { registrySales };
