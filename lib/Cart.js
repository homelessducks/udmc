module.exports = class Cart {
  constructor() {
    this.items = []
  }

  addProduct(product, quantity) {
    this.items.push({
      product,
      quantity,
    })

    return this
  }

  getTotalPrice() {
    return this.items.reduce((p, c) => p + c.quantity * c.product.price, 0)
  }
}
