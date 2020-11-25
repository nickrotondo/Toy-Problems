describe('countIslands', function() {
  it('should exist', function() {
    should.exist(countIslands);
  });

  it('should be a Function', function() {
    countIslands.should.be.a.Function;
  });

  it('should take at least one argument', function() {
    countIslands.length.should.be.above(0);
  });

  it('should return a number', function() {
    var result = countIslands('.');
    should.exist(result);
    result.should.be.a.Number;
  });
  it('should accurately count all the islands in any input string', function() {

    var inputs = [
      '.0...\n.00..\n....0',
      '..000.\n..000.\n..000.\n.0....\n..000.',
      '..000.\n..0...\n..0.0.\n..0...\n..000.',
      '0....0\n......\n..00..\n......\n0....0',
      '00...0\n0...00\n......\n0.0.0.\n0.....',
      '0...0\n0...0\n00000',
      '0...0\n..0..\n0...0',
      '.',
      '0',
      '...\n..0\n.00',
      '.....\n..0..\n.000.\n..0..\n.....',
      '00..00\n..00..\n00..00\n..00..'
    ]

    var outputs = [2, 3, 2, 5, 5, 1, 5, 0, 1, 1, 1, 6]

    inputs.forEach(function(input, i) {
      countIslands(input).should.equal(outputs[i]);
    })
  });
});
