---
id: 41-first-missing-positive
title: 缺失的第一个正数
sidebar_label: 41. 缺失的第一个正数
---

## 题目

给你一个未排序的整数数组 `nums`, 请你找出其中没有出现的最小的正整数.

:::info 示例

```ts
输入: nums = [1, 2, 0]
输出: 3
```

```ts
输入: nums = [3, 4, -1, 1]
输出: 2
```

```ts
输入: nums = [7, 8, 9, 11, 12]
输出: 1
```

:::

## 题解

### 菜 🐔 解法

因为我比较菜, 所以先排个序. 让 `min` 初始化为 `1`, 因为最小正整数就是 `1` 了. 然后遍历数组, 如果 `num === min`, 说明 `min` 至少得加 `1`, 结束此轮循环; 如果 `num > min`, 此时的 `min` 就是缺失的最小的第一个正数了.

```ts
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  const n = nums.length
  let min = 1

  nums.sort((a, b) => a - b)

  for (const num of nums) {
    if (num === min) {
      min += 1
      continue
    }
    if (num > min) {
      break
    }
  }

  return min
}
```
