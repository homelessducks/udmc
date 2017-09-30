module.exports = class ThreeItemsDiscount {
  getType() {
    return 'item_set'
  }

  apply(product, quantity) {
    let price = product.price * quantity

    return quantity >= 3 ? price * .75 : price
  }
}
