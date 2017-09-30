const items = require('./data');
const Cart = require('./Cart');

const cart = new Cart();

items.forEach(item => cart.add(item));

const result = cart.buy();

console.log(result);
