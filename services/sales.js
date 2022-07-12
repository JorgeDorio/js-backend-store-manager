const model = require('../models/registrySales');

const registrySales = async (data) => {
  const date = (new Date()).toISOString().slice(0, 19).replace('T', ' '); // https://www.geeksforgeeks.org/how-to-convert-javascript-datetime-to-mysql-datetime/
  console.table(data);
  await model.registrySale(date, data);
  const lastSale = await model.getLastSale(data.length);
  const itemsSold = lastSale.map((product) => ({
    productId: product.product_id, quantity: product.quantity,
  }));
  console.table(itemsSold);
  return {
    id: lastSale[0].sale_id + 1,
    itemsSold,
  };
};

module.exports = { registrySales };
