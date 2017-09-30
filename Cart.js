const { getItemsPrice } = require('./utils');

class Cart {
  constructor() {
    this.SAME_TYPE_DISCOUNT = 0.75;
    this.GENERAL_DISCOUNT = 0.9;
    this.items = {};
  }

  add(product) {
    if (!this.items[product.type]) {
      this.items[product.type] = [];
    }

    return product
      ? this.items[product.type].push(product)
      : false;
  }

  buy() {
    let cost = 0;

    Object.values(this.items)
      .forEach((items) => {
        const itemsPrice = getItemsPrice(items);

        cost += items.length > 2
          ? itemsPrice * this.SAME_TYPE_DISCOUNT
          : itemsPrice;
      });

    cost = cost > 100 ? cost * this.GENERAL_DISCOUNT : cost;

    return {
      cost,
      items: [].concat(...Object.values(this.items)),
    };
  }
}

module.exports = Cart;
