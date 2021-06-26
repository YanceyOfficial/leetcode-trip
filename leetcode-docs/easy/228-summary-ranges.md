---
id: 228-summary-ranges
title: 汇总区间
sidebar_label: 228. 汇总区间
---

## 题目

给定一个无重复元素的有序整数数组, 返回数组区间范围的汇总.

:::info 示例

输入: [0, 1, 2, 4, 5, 7]

输出: ['0->2', '4->5', '7']

解释: 0,1,2 可组成一个连续的区间; 4,5 可组成一个连续的区间; 7 可组成一个连续的区间

:::

## 题解

1. 设置两个指针 `i = 0`, `j = 1`
2. 如果 `nums[j] - nums[i] !== j - i`, 那一定是个连续子串
   - 如果 `i === j - 1`, 也就是"连续子串"只有一个元素
   - 否则通过 `->` 来连接一个区间
3. 保证每次循环 `j` 都往前走一个步

```ts
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  const n = nums.length
  const res = []
  let i = 0
  let j = 1

  while (j <= n) {
    if (nums[j] - nums[i] !== j - i) {
      if (i === j - 1) {
        res.push(nums[i].toString())
      } else {
        res.push(`${nums[i]}->${nums[j - 1]}`)
      }

      i = j
    }

    j++
  }

  return res
}
```
