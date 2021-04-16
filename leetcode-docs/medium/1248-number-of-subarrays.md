---
id: 1248-number-of-subarrays
title: 统计「优美子数组」
sidebar_label: 1248. 统计「优美子数组」
keywords:
  - 前缀和
---

:::success Tips
题目类型: 前缀和

相关题目:

- [1. 两数之和](/leetcode/easy/1-two-sum)
- [523. 连续的子数组和](/leetcode/medium/523-check-subarray-sum)
- [560. 和为 k 的子数组](/leetcode/medium/560-subarray-sum)
- [724. 寻找数组的中心下标](/leetcode/easy/724-pivot-index)
- [930. 和相同的二元子数组](/leetcode/medium/930-num-subarrays-with-sum)
- [974. 和可被-k-整除的子数组](/leetcode/medium/974-subarrays-div-by-k)

:::

## 题目

给你一个整数数组 `nums` 和一个整数 `k`. 如果某个**连续**子数组中恰好有 `k` 个奇数数字, 我们就认为这个子数组是**优美子数组**. 请返回这个数组中**优美子数组**的数目.

:::info 示例

```ts
输入: nums = [1,1,2,1,1], k = 3
输出: 2
解释: 包含 3 个奇数的子数组是 [1,1,2,1] 和 [1,2,1,1].
```

```ts
输入: nums = [2,4,6], k = 1
输出: 0
解释: 数列中不包含任何奇数，所以不存在优美子数组.
```

```ts
输入: (nums = [2, 2, 2, 1, 2, 2, 1, 2, 2, 2]), (k = 2)
输出: 16
```

:::

## 题解

这里记录的 preSum 其实变成了某个子区间的**奇数元素的个数**.

```ts
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
  let oddNum = 0
  let count = 0
  const map = new Map([[0, 1]])

  for (const num of nums) {
    // 等价于 num % 2 === 1 ? 1 : 0
    oddNum += num & 1

    if (map.has(oddNum - k)) {
      count += map.get(oddNum - k)
    }

    if (map.has(oddNum)) {
      map.set(oddNum, map.get(oddNum) + 1)
    } else {
      map.set(oddNum, 1)
    }
  }

  return count
}
```
