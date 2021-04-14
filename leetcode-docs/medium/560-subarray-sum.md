---
id: 560-subarray-sum
title: 和为k的子数组
sidebar_label: 560. 和为k的子数组
keywords:
  - 前缀和
---

:::success Tips
题目类型: 前缀和
:::

## 题目

给定一个整数数组和一个整数 k, 你需要找到该数组中和为 k 的**连续**的子数组的个数.

:::info 示例

输入: nums = [1, 1, 1], k = 2

输出: 2

解释: [1, 1] 与 [1, 1] 为两种不同的情况.
:::

## 题解

这道题的核心是**前缀和**, 前缀和的代码如下, 如果我们想求 nums[i] 到 nums[j] 的和, 可以使用 `preSum[j + 1] - preSum[i]` 得出.

```ts
nums = [3, 5, 2, -2, 4, 1]
preSum = [0, 3, 8, 10, 8, 12, 13]
```

```ts
var getPreSum = function (nums) {
  const len = nums.length
  const preSum = new Array(len + 1).fill(0)

  // 构造前缀和
  for (let i = 0; i < len; i++) {
    preSum[i + 1] = preSum[i] + nums[i]
  }

  return preSum
}
```

这道题初解可以用下面的代码, 但在 leetcode 提交时提示超时, 原因就是穷尽所有子数组时整了个双循环, 时间复杂度飙升到了 O(n<sup>2</sup>).

```ts
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  const len = nums.length
  const preSum = new Array(len + 1).fill(0)

  // 构造前缀和
  for (let i = 0; i < len; i++) {
    preSum[i + 1] = preSum[i] + nums[i]
  }

  let count = 0
  // 穷举所有子数组
  for (let left = 0; left < len; left++) {
    for (let right = left; right < len; right++) {
      // 利用前缀和的性质
      if (preSum[right + 1] - preSum[left] === k) {
        count++
      }
    }
  }

  return count
}
```
