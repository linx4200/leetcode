// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R

// And then read line by line: "PAHNAPLSIIGYIR"
// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string text, int nRows);
// convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows <= 1 || !s || s.length === 0) return s
  var res = ''
  var k = 2 * numRows - 2
  // i 为行数
  for (var i = 0; i < numRows; i++) {
    var idx = i
    // 注意: 下标超过数组长度就可以停止了
    for (var j = 0, length = s.length; idx < length; j++) {
      res += s[idx]
      // 第一行跟最后一行
      if (i === 0 || i === numRows - 1) {
        idx += k
      }
      else {
        // 奇数列
        if (j % 2 === 0) idx += k - 2 * i
        // 偶数列
        if (j % 2 === 1) idx += 2 * i
      }
    }
  }
  return res
}

convert('AB', 1)  // AB
convert('PAYPALISHIRING', 3)  // PAHNAPLSIIGYIR
convert('PAYPALISHIRING', 4)  // PINALSIGYAHRPI  
convert('PAYPALISHIRING', 5)  // PHASIYIRPLIGAN