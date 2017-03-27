// https://leetcode.com/problems/battleships-in-a-board/

/**********************************************************************************
 *
 * 
 * Given an 2D board, count how many battleships are in it. The battleships are represented with 'X's, empty slots are represented with '.'s. You may assume the following rules:

 * You receive a valid board, made of only battleships or empty slots.
 * Battleships can only be placed horizontally or vertically. In other words, they can only be made of the shape 1xN (1 row, N columns) or Nx1 (N rows, 1 column), where N can be of any size.
 * At least one horizontal or vertical cell separates between two battleships - there are no adjacent battleships.
 * Example:
 *   X..X
 *   ...X
 *   ...X
 * In the above board there are 2 battleships.
 * Invalid Example:
 *   ...X
 *   XXXX
 *   ...X
 * This is an invalid board that you will not receive - as battleships will always have a cell separating between them.
 * 
 **********************************************************************************/

/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
  var i = 0;
  var j = 0;
  var l = board.length;
  var ll = board[0].length;
  var tmp = []
  var flag = false
  var count = 0

  while(i < l) {
    if (board[i][j] === 'X') {
      board[i][j] = '.'
      if (!flag) {
        tmp[0] = i
        tmp[1] = j
        count++
      }

      if (board[i+1] && board[i+1][j] === 'X') {
        flag = true
        i++
        continue;
      }
      if (board[i][j+1] === 'X') {
        flag = true
        j++
        continue;
      }

      i = tmp[0]
      j = tmp[1]
      tmp = []
      flag = false
    }
    j++
    if (j >= ll) {
      i++
      j = 0
    }
  }
  return count
};