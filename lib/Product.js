module.exports = class Product {
  constructor(name, price) {
    Object.assign(this, {
      name,
      price,
    })
  }

  getPrice() {
    return this.price
  }

  getName() {
    return this.name
  }
}
