const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numbers = n.toString().split('');
  let max = parseInt([...numbers].slice(1).join(''));
  numbers.forEach((_, i) => {
    const newNums = [...numbers]
    newNums.splice(i, 1)
    const num = parseInt(newNums.join(''))
    if (num > max) max = num
  })
  return max
}

module.exports = {
  deleteDigit
};
