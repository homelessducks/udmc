module.exports = class BasicDiscount {
  getType() {
    return 'total'
  }

  apply(total_price) {
    return total_price
  }
}
