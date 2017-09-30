module.exports = class Cart {
  constructor(discounts = []) {
    discounts = sortDiscounts(discounts)

    Object.assign(this, {
      discounts,
      items: [],
    })
  }

  addProduct(product, quantity) {
    this.items.push({
      product,
      quantity,
    })

    return this
  }

  getTotalPrice() {
    let summator = (p, q) => q * p.price

    if (this.discounts.item_set) {
      summator = this.discounts.item_set.apply;
    }

    let totalPrice = this.items.reduce((p, c) => p + summator(c.product, c.quantity), 0)

    this.discounts.total.forEach(discount => {
      totalPrice = discount.apply(totalPrice)
    })

    return +totalPrice.toFixed(2)
  }
}

function sortDiscounts(discounts) {
  const total = discounts.filter(i => i.getType() === 'total')
  const item_set = discounts.find(i => i.getType() === 'item_set')

  return {
    total,
    item_set,
  }
}
