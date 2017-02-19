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
    var kk = k - i * 2
    var j = 0
    var last = 0
    if (kk === 0) kk = k
    for (var idx = i, length = s.length; idx < length; idx++) {
      // 第一行跟最后一行
      if (i === 0 || i === numRows - 1) {
        res += s[i + j * kk]
        j++
        if (i + j * kk >= length) break;
      }
      // 中间行
      else {
        if (idx === i) {
          res += s[i]
          j++
          last = i
        }
        else if (j % 2 === 1 && idx === last + kk) {
          res += s[last + kk]
          j++
          last = idx
        }
        else if (j % 2 === 0 && idx === last + (k - kk)) {
          res += s[last + (k - kk)]
          j++
          last = idx
        }
      }
    }
  }
  return res
}

convert('AB', 1)  // AB
convert('PAYPALISHIRING', 3)  // PAHNAPLSIIGYIR
convert('PAYPALISHIRING', 4)  // PINALSIGYAHRPI
convert('PAYPALISHIRING', 5)  // PHASIYIRPLIGAN