/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

var rockPaperScissors = function (rounds) {
  var rounds = rounds || 3
  // Set up options array
  var plays = ['R', 'P', 'S'];
  // set results array
  var results = [];
  // set up function to call recursively on each combination of options. Pass in rounds and a possibilities array
  var optionsFinder = function(rounds, possibilities) {
    // if rounds = 0
    if (rounds === 0) {
      // push possibilites array to results array
      results.push(possibilities.join(''));
    } else {
      // for each option
      plays.forEach(function(play) {
        // call recursive function and pass in rounds-1 and the concatted possibilites array
        optionsFinder((rounds - 1), possibilities.concat(play));
      })
    }
  }
  // initialize the recursion
  optionsFinder(rounds, []);
  // return results array
  return results;
};
