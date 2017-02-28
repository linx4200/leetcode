// Source : https://leetcode.com/problems/hamming-distance/

/**********************************************************************************
 *
 * The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

 * Given two integers x and y, calculate the Hamming distance.

 * Note:
 * 0 ≤ x, y < 231.

 * Example:

 *   Input: x = 1, y = 4

 *   Output: 2

 *   Explanation:
 *   1   (0 0 0 1)
 *   4   (0 1 0 0)
            ↑   ↑

 *   The above arrows point to positions where the corresponding bits are different.
 *
 **********************************************************************************/

function addZero(arr, length) {     
  return new Array(length - arr.length + 1).join('0').split('').concat(arr)
}

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  var xx = x.toString(2).split('')
  var yy = y.toString(2).split('')

  xx.length > yy.length ? yy = addZero(yy, xx.length) : xx = addZero(xx, yy.length)

  return xx.reduce(function (prev, cur, index) {
    return cur !== yy[index] ? prev + 1 : prev;
  }, 0)
};

// hammingDistance(1, 4) // 2

// hammingDistance(100, 1) // 4