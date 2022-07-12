const connection = require('./connection');

const registrySale = async (saleDate, data) => {
  const [[{ id }]] = await connection.query(
    'SELECT id FROM StoreManager.sales ORDER BY id DESC LIMIT 1',
  );
  await connection.query('INSERT INTO StoreManager.sales (date) VALUES (?)', [saleDate]);

  data.forEach(async (product) => {
    await connection.query(
      'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
      [id, product.productId, product.quantity],
    );
  });
};

const getLastSale = async (size) => {
  const [response] = await connection.query(
    'SELECT * FROM StoreManager.sales_products ORDER BY sale_id DESC, product_id ASC LIMIT ?',
    [size],
  );
  return response;
};

module.exports = { registrySale, getLastSale };
