const {
  Product,
  Cart,
  Discount,
  DiscountMore3,
  DiscountMore100
} = require('./');

const product1 = new Product('phone', 20);
const product2 = new Product('phone', 20);
const product3 = new Product('phone', 25);
const product4 = new Product('mouse', 4);
const product5 = new Product('laptop', 100);

const cart = new Cart();

cart.addProduct(product1)
.addProduct(product2)
.addProduct(product3)
.addProduct(product4)
.addProduct(product5);


const discount1 = new DiscountMore100(cart);
const discount2 = new DiscountMore3(cart);

console.log(cart.getPrice() + '///', discount2.execute(), discount1.execute())