describe('Cart', () => {
  const Entity = require('./Cart')
  const Product = require('./Product')
  const HundredBucksDiscount = require('./discounts/HundredBucksDiscount')
  const ThreeItemsDiscount = require('./discounts/ThreeItemsDiscount')

  it('addProduct', () => new Entity().should.have.property('addProduct').which.is.a.Function())
  it('getTotalPrice', () => new Entity()
    .addProduct(new Product('meat', 13), 2)
    .addProduct(new Product('milk', 7), 1)
    .addProduct(new Product('apple', 3), 3)
    .getTotalPrice()
    .should.equal(42))

  it('getTotalPrice discounts', () => new Entity([new HundredBucksDiscount])
    .addProduct(new Product('meat', 13), 8)
    .getTotalPrice()
    .should.equal(93.6))

  it('getTotalPrice discounts', () => new Entity([new ThreeItemsDiscount])
    .addProduct(new Product('meat', 13), 3)
    .getTotalPrice()
    .should.equal(29.25))
})
