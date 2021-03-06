# 读题

给出一个正整数，返回对应的“补数”(?)。

求“补数”的规则是把正整数用二进制表达后，每一位求反，返回求反后的十进制表达。

二进制表达后不需要用0补齐。

# 解体

# First Attempt

按位求反第一个反应就是按位非运算符 `~` ，但是有个问题:

`2` 按位非 `~2` 得到的结果是 `-3`

原因是 `2` 的二进制码并补齐后是:

0000 0000 0000 0000 0000 0000 0000 0010

按位非:

1111 1111 1111 1111 1111 1111 1111 1101

第一位是 `1` , 因此这个数是个负数，负数用的是 `二进制补码` 表示。

首先减 1:

1111 1111 1111 1111 1111 1111 1111 1100

求反码:

0000 0000 0000 0000 0000 0000 0000 0011

求十进制码，并加上负号:

-3

所以如果直接使用按位非的，行不通。

```js
var findComplement = function(num) {
  var res = []
  while(num) {
    var n = +num.toString(2) & 1
    res.unshift(n === '1' ? 0 : 1)
    num = num >> 1
  }
  return parseInt(res.join(''), 2)
};
```

第一次提交代码，提示 Failed 。

原因是 `findComplement(20161211)` 返回结果错误, 正确答案是 13393220, 我的答案返回了 13393407。

认真研究了一下，发现问题出在 `+num.toString(2)`:

```js
(20161211).toString(2) // 100110011101000101011101

+100110011101000101011101 // 1.001100111010001e+24

// 100110011101000101011101 这个十进制数已经超过的 js 最大的 9007199254740991，只能用科学计数法表示。
```

于是得到了:

```js
var findComplement = function(num) {
  var res = []
  while(num) {
    var n = num.toString(2).split('').reverse()[0]
    res.unshift(n === '1' ? 0 : 1)
    num = num >> 1
  }
  return parseInt(res.join(''), 2)
};
```

提交显示成功，但是 Your runtime beats 5.51% of javascript submissions.

# Second Attempt

github 上搜索[大神的答案](https://github.com/hanzichi/leetcode/blob/master/Algorithms/Number%20Complement/number-complement.js)

```javascript
var findComplement = function(num) {
  let ans = 0
    , add = 1;

  while (num) {
    if (!(num & 1)) // 最后一位为 0
      ans += add;
    num >>= 1;
    add <<= 1; // 左移 1 位，补0
  }

  return ans;
};
```

`>>=` 和 `<<=` 没见过:

```js
x >>= y
// meaning ==>
x = x >> y
```

超聪明的，原有数字右移的同时，用另外一个数左移，就等于一位一位地把原来的位置掉转。