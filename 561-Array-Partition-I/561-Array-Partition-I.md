# 读题

这道题有点绕口呀，给出一个长度为 2n 的数组，两两配对，使得 min(ai, bi) 的和最大。

# 解体思路

把数组从小到大排列，相邻的两个成组，就可以使得 min(ai, bi) 的和最大了。

# Attemp 1

```js
const arrayPairSum = function(nums) {
  return nums.sort((a, b) => a > b).filter((v, i) => i % 2 === 0).reduce(((p, c) => p + c), 0);
};
```

在尝试 `[11, 41, -9046, 2047, 1118, 8477, 8446, 279, 4925, 7380, -1719, 3855]` 的时候失败了。

我的答案是 `11794`, 正确答案是 `6662`

what?

发现第一步的时候就错了，排序出来的结果是:

`[ 8446, 11, -9046, -1719, 41, 279, 1118, 2047, 3855, 4925, 7380, 8477 ]`

`sort` 函数的参数 `compareFunction` 比较函数的判断标准是：

  > 如果想按照其他标准进行排序，就需要提供比较函数，该函数要比较两个值，然后返回一个用于说明这两个值的相对顺序的数字。比较函数应该具有两个参数 a 和 b，其返回值如下：
  > 若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值。
  > 若 a 等于 b，则返回 0。
  > 若 a 大于 b，则返回一个大于 0 的值。

所以问题就出在这儿了：

```js
true > 0 // true
true < 0 // false

false > 0 // false
false < 0 // false
```

因为直接是 `return a > b` ，所以 `false` 的情况判断失效了。

因此直接改成 `nums.sort((a, b) => a - b)` ，完成，得出正确答案！

> Your runtime beats 15.35 % of javascript submissions.

# Attemp 2

优化一下，可以把 `filter` 的操作直接放到 `reduce` 里面：

```js
const arrayPairSum = function(nums) {
  return nums.sort((a, b) => a - b).reduce(((p, c, i) => (i % 2 === 0 ? p + c : p)), 0);
};
```

> Your runtime beats 51.63 % of javascript submissions.