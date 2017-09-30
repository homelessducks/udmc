class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Cart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);

    return this;
  }

  getPrice() {
    return this.products.reduce((p, c) => p + c.price, 0);
  }
}

class Discount {
  constructor(strategy) {
    this.strategy = strategy;
  }

  getDiscountVal() {
    return this.strategy.execute();
  }
}

class DiscountMore3 {
  constructor(cart) {
    this.val = 25;
    this.cart = cart;
    this.condition = 3;
    this.totalDiscount = 0;
    this.applied = [];
  }

  getBlockDiscount(product) {
    const products = this.cart.products.filter(p => p.name === product.name);
    return products.length < 3 ? 0 : products.reduce((p, c) => p + c.price, 0) * (this.val / 100);
  }

  execute() {
    for (let i = 0; i < this.cart.products.length; i++) {
      if (this.applied.indexOf(this.cart.products[i].name) > -1) {
        continue;
      }
      this.totalDiscount += this.getBlockDiscount(this.cart.products[i]);
      this.applied.push(this.cart.products[i].name);
    }

    return this.totalDiscount;
  }
}

class DiscountMore100 {
  constructor(cart) {
    this.condition = 100;
    this.cart = cart;
    this.val = 10;
  }

  execute() {
    return this.cart.getPrice() > this.condition ? (this.val / 100) * this.cart.getPrice() : 0;
  }
}

module.exports = { Product, Cart, Discount, DiscountMore3, DiscountMore100 };
