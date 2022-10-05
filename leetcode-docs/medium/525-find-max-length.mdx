---
id: 525-find-max-length
title: 连续数组
sidebar_label: 525. 连续数组
keywords:
  - 前缀和 + HashMap
---

:::success Tips
题目类型: 前缀和 + HashMap

相关题目:

- [1. 两数之和](/leetcode/easy/1-two-sum)
- [523. 连续的子数组和](/leetcode/medium/523-check-subarray-sum)
- [560. 和为 k 的子数组](/leetcode/medium/560-subarray-sum)
- [724. 寻找数组的中心下标](/leetcode/easy/724-pivot-index)
- [930. 和相同的二元子数组](/leetcode/medium/930-num-subarrays-with-sum)
- [974. 和可被-k-整除的子数组](/leetcode/medium/974-subarrays-div-by-k)
- [1248. 统计「优美子数组」](/leetcode/medium/1248-number-of-subarrays)

:::

## 题目

给定一个二进制数组 nums, 找到含有相同数量的 0 和 1 的最长连续子数组, 并返回该子数组的长度.

:::info 示例

输入: nums = [0, 1, 0]

输出: 2

说明: [0, 1] (或 [1, 0]) 是具有相同数量 0 和 1 的最长连续子数组。

:::

## 题解

找出 nums 中的某个连续子数组, 使得这个子数组中有相同数量的 0 和 1. 不妨把 0 看作 -1, 这就变成了**找出某个子数组的和为 0**.

```ts
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  const n = nums.length
  const preSum = new Array(n + 1).fill(0)
  const map = new Map([[0, 0]])
  let max = 0

  for (let i = 0; i < n; i++) {
    // 把 0 看作 -1, 加入到前缀和中
    preSum[i + 1] = preSum[i] + (nums[i] === 0 ? -1 : 1)
  }

  for (let i = 1; i <= n; i++) {
    const sum = preSum[i]
    if (map.has(sum)) {
      // 当再次出现该前缀和时, 说明和前面那个前缀和之间 0 和 1 的数目相同
      // 遂计算间距大小, 取最大值
      max = Math.max(max, i - map.get(sum))
    }
    if (!map.has(sum)) {
      // 记录前缀和最小的下标
      map.set(sum, i)
    }
  }

  return max
}
```
