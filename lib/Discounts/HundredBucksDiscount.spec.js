describe('HundredBucksDiscount', () => {
  const Entity = require('./HundredBucksDiscount')

  it('getType', () => new Entity().getType().should.equal('total'))

  it('apply < 100', () => new Entity()
    .apply(99)
    .should.equal(99))

  it('apply = 100', () => new Entity()
    .apply(100)
    .should.equal(90))

  it('apply > 100', () => new Entity()
    .apply(1000)
    .should.equal(900))
})
