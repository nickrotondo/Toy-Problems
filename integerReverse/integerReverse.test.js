describe('reverseInteger', function() {

  it('should exist', function() {
    should.exist(reverseInteger);
  });

  it('should be a function', function() {
    reverseInteger.should.be.a.Function;
  });

  it('should reverse the provided integer', function () {
    reverseInteger(1234).should.equal(4321);
    reverseInteger(100).should.equal(1);
    reverseInteger(150).should.equal(51);
    reverseInteger(2342617432).should.equal(2347162432);
    reverseInteger(2836591).should.equal(1956382);
    reverseInteger(58648550).should.equal(5584685);
    reverseInteger(5748104710).should.equal(174018475);
    reverseInteger(77477477).should.equal(77477477);
    reverseInteger(1).should.equal(1);
    reverseInteger(10).should.equal(1);
    reverseInteger(0).should.equal(0);
  });
});