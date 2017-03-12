// Source : https://leetcode.com/problems/keyboard-row/

/**********************************************************************************
 *
 * Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.
 * 
 * Example 1:
 *  Input: ['Hello', 'Alaska', 'Dad', 'Peace']
 *  Output: ['Alaska', 'Dad']
 * 
 * Note:
 * You may use one character in the keyboard more than once.
 * You may assume the input string will only contain letters of alphabet.
 * 
 **********************************************************************************/

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  return words.filter(function (word) {
    return (!word.replace(/[QWERTYUIOPqwertyuiop]/g, '') || !word.replace(/[AaSsDdFfGgHhJjKkLl]/g, '') || !word.replace(/[ZXCVBNMzxcvbnm]/g, ''))
  })
};

// findWords(['Hello', 'Alaska', 'Dad', 'Peace']) // [ 'Alaska', 'Dad' ]