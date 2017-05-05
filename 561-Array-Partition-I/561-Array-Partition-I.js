// Source : https://leetcode.com/problems/array-partition-i/

/**********************************************************************************
 *
 * Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of
 * min(ai, bi) for all i from 1 to n as large as possible.
 * 
 * Example 1:
 *   Input: [1,4,3,2]
 *   Output: 4
 *   Explanation: n is 2, and the maximum sum of pairs is 4.
 * 
 * Note:
 *   1. n is a positive integer, which is in the range of [1, 10000].
 *   2. All the integers in the array will be in the range of [-10000, 10000].
 * 
 **********************************************************************************/

/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = function(nums) {
  return nums.sort((a, b) => a - b).reduce(((p, c, i) => (i % 2 === 0 ? p + c : p)), 0);
};

// arrayPairSum([-2,3,-1,5,2,0,10,-5]) // 1
// arrayPairSum([1,4,3,2]) // 4
// arrayPairSum([11, 41, -9046, 2047, 1118, 8477, 8446, 279, 4925, 7380, -1719, 3855]) // 6662
