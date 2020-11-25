describe('editDistance()', function() {
  it('should exist', function() {
    should.exist(editDistance);
  });

  it('should be a function', function() {
    editDistance.should.be.a.Function;
  });

  var editDistanceTestFunction = function(input1, input2, output) {
    // NOTE: students will see the contents of the `test` function
    // if their code doesn't pass the test
    return new Function(
      `return editDistance("${input1}", "${input2}").should.equal(${output})`
    );
  };

  var addTest = function(input, output) {
    var input1 = input[0];
    var input2 = input[1];
    it(
      `should return ${output} for editDistance("${input1}", "${input2}")`,
      editDistanceTestFunction(input1, input2, output)
    );
  }

  // this adds a test for every possible input/output pair that the students
  // will see formatted and pretty as if all of these tests were hand written
  var pairs = inputOutputPairs(); // eslint-disable-line no-use-before-define
  for (var i = 0; i < pairs.length; i++) {
    addTest(pairs[i][0], pairs[i][1]);
  }
})

function inputOutputPairs() {
  // eslint-disable-line func-style
  return [
    [['cat', 'cut'], 1],
    [['wednesday', 'sunday'], 5],
    [['hackerrank', 'hackreactor'], 6]
  ]
}
