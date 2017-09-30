describe('ThreeItemsDiscount', () => {
  const Entity = require('./ThreeItemsDiscount')

  it('getType', () => new Entity().getType().should.equal('item_set'))

  it('apply < 3', () => new Entity()
    .apply({price: 13}, 2)
    .should.equal(26))

  it('apply = 3', () => new Entity()
    .apply({price: 13}, 3)
    .should.equal(29.25))

  it('apply > 3', () => new Entity()
    .apply({price: 13}, 4)
    .should.equal(39))
})
