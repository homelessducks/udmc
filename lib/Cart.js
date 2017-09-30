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
    let totalPrice = this.items.reduce((p, c) => p + c.quantity * c.product.price, 0)

    this.discounts.total.forEach(discount => {
      totalPrice = discount.apply(totalPrice)
    })

    return +totalPrice.toFixed(2)
  }
}

function sortDiscounts(discounts) {
  const total = discounts.filter(i => i.getType() === 'total')

  return {
    total,
  }
}
