// Source : https://leetcode.com/problems/complex-number-multiplication/

/**********************************************************************************
 *
 * Given two strings representing two complex numbers.
 * You need to return a string representing their multiplication. Note i2 = -1 according to the definition.
 * 
 * Example 1:
 *   Input: "1+1i", "1+1i"
 *   Output: "0+2i"
 *   Explanation: (1 + i) * (1 + i) = 1 + i2 + 2 * i = 2i, and you need convert it to the form of 0+2i.
 * 
 * Example 2:
 *   Input: "1+-1i", "1+-1i"
 *   Output: "0+-2i"
 *   Explanation: (1 - i) * (1 - i) = 1 + i2 - 2 * i = -2i, and you need convert it to the form of 0+-2i.
 * 
 * Note:
 * The input strings will not have extra blank.
 * The input strings will be given in the form of a+bi, where the integer a and b will both belong to the range of [-100, 100]. And the output should be also in this form.
 *
 **********************************************************************************/

function decomposition(s) {
  const [a, b] = s.split('+')
  return [+a, +b.split('i')[0]]
}

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function(a, b) {
  const [a1, b1] = decomposition(a)
  const [a2, b2] = decomposition(b)
  const aa = a1 * a2 - b1 * b2
  const bb = a1 * b2 + a2 * b1
  return `${aa}+${bb}i`
};

complexNumberMultiply('1+1i', '1+1i') // "0+2i"
complexNumberMultiply('1+-1i', '1+-1i') // "0+-2i"
complexNumberMultiply('1+-1i', '1+-100i') // "-99+-101i"