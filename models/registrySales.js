const connection = require('./connection');

const registrySale = async (saleDate, data) => {
  const [[{ id }]] = await connection.query(
    'SELECT id FROM StoreManager.sales ORDER BY id DESC LIMIT 1',
  );
  await connection.query('INSERT INTO sales (date) VALUES (?)', [saleDate]);

  data.forEach(async (product) => {
    await connection.query(
      'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
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

// {
//   "id": 3,
//   "itemsSold": [
//     {
//       "productId": 1,
//       "quantity":1
//     },
//     {
//       "productId": 2,
//       "quantity":5
//     }
//   ]
// }

module.exports = { registrySale, getLastSale };
