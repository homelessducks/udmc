describe('Product', () => {
  const Entity = require('./Product')

  it('getPrice', () => new Entity('milk', 17.43).getPrice().should.equal(17.43))
  it('getName', () => new Entity('milk', 17.43).getName().should.equal('milk'))
})
