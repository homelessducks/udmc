const getItemsPrice = items => items.reduce((sum, item) => sum + item.price, 0);

module.exports = { getItemsPrice };
