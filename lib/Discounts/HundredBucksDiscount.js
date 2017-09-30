const BasicDiscount = require('./BasicDiscount')

module.exports = class HundredBucksDiscount extends BasicDiscount {
  apply(total_price) {
    return total_price >= 100 ? total_price * .9 : total_price
  }
}
