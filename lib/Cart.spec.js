describe('Cart', () => {
  const Entity = require('./Cart')
  const Product = require('./Product')

  it('addProduct', () => new Entity().should.have.property('addProduct').which.is.a.Function())
  it('getTotalPrice', () => new Entity()
    .addProduct(new Product('meat', 13), 2)
    .addProduct(new Product('milk', 7), 1)
    .addProduct(new Product('apple', 3), 3)
    .getTotalPrice()
    .should.equal(42))
})
