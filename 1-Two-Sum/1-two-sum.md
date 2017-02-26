# 读题

给出一个数组和一个目标数字，找出数组中两个数字相加等于目标数字，返回那两个数字的下标。

# 解题

## First attemp

[第一次尝试](https://github.com/linx4200/leetcode/commit/2da5b90a7046cd7264b902962dca43deb7679142)很愚蠢的遍历两次数组。

结果: Your runtime beats 31.14% of javascript submissions.

## Second attemp

通过在网上看别人的解题思路，另外使用一个哈希表，来记录未来希望得到的数字。 key 值为当前数字期望得到的对应数字，value 值为当前数字的下标。

应该是以一种空间换时间的策略。

结果: Your runtime beats 82.31% of javascript submissions.