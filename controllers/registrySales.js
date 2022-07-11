const services = require('../services/sales')

const registrySales = async (req, res) => {
  const data = req.body
  const response = await services.registrySales()
  console.log(response)
  res.status(201).json(data)
}

module.exports = { registrySales }
