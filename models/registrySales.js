const connection = require('./connection')

const registrySale = (saleDate, sale_id, product_id, quantity) => {
  await connection.query('INSERT INTO sales (date) VALUES (?)', [saleDate])
  await connection.query('INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)', [sale_id, product_id, quantity])
}

module.exports = { registrySale }
