---
id: 53-max-sub-array
title: 最大子序和
sidebar_label: 53. 最大子序和
keywords:
  - Dynamic Programming
---

:::success Tips
题目类型: Dynamic Programming
:::

## 题目

给定一个整数数组 nums, 找到一个具有最大和的连续子数组(子数组最少包含一个元素, 返回其最大和.

:::info 示例

输入: nums = `[-2, 1, -3, 4, -1, 2, 1, -5, 4]`

输出: 6

解释: 连续子数组 `[4, -1, 2, 1]` 的和最大, 为 6.
:::

## 题解

sum 为局部(也就是子数组)的累加和, 如果 sum 为负数或 0, 说明以前的累加和应该被废弃(毕竟越加越小); `如果 sum > 0`, 前面的累加和就可以被复用. 让 `ans` 和 `sum` 比较, 找出最大的即可.

```ts
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let ans = nums[0]
  let sum = 0

  for (let i = 0; i < nums.length; i++) {
    if (sum > 0) {
      sum += nums[i]
    } else {
      sum = nums[i]
    }

    ans = Math.max(ans, sum)
  }
  return ans
}
```
