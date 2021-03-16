---
id: 136-single-number
title: 只出现一次的数字
sidebar_label: 136. 只出现一次的数字
---

:::success Tips
题目类型: 位运算, hash 表

相关题目: [191. 位 1 的个数](/leetcode/easy/191-hamming-weight), [231. 2 的杨](/leetcode/easy/231-is-power-of-two)
:::

## 题目

给定一个非空整数数组, 除了某个元素只出现一次以外, 其余每个元素均出现两次. 找出那个只出现了一次的元素.

:::info 示例

```ts
输入: [2, 2, 1]

输出: 1
```

```ts
输入: [4, 1, 2, 1, 2]

输出: 4
```

:::

## 题解

首先肯定能想到 hashmap 吧, 这个想不出来拉出去鞭尸好了.

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const len = nums.length
  const set = new Set()

  for (let i = 0; i < len; i++) {
    const hasCurr = set.has(nums[i])
    if (hasCurr) {
      set.delete(nums[i])
    } else {
      set.add(nums[i])
    }
  }

  return set.keys().next().value
}
```

这道题的另一种解法是使用按位异或, 关于按位异或可访问 [位运算的一些技巧](/algorithm-design/bit-manipulation/bit-manipulation#按位异或xor).

```js
// 按位异或(XOR)
var singleNumber = function (nums) {
  return nums.reduce((acc, val) => acc ^ val)
}
```
