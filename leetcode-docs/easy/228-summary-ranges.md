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

TODO:

```ts
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let i = 0
  let j = 1

  const ans = []
  const len = nums.length

  while (j <= len) {
    if (j === len || nums[j] !== nums[j - 1] + 1) {
      if (i === j - 1) {
        ans.push(nums[i].toString())
      } else {
        ans.push(`${nums[i]}->${nums[j - 1]}`)
      }

      i = j
    }
    j++
  }

  return ans
}
```
