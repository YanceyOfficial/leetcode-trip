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

### 原地哈希

即使用数字下标作为哈希.

```ts
var firstMissingPositive = function (nums) {
  const n = nums.length

  for (let i = 0; i < n; i++) {
    while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
      // 满足在指定范围内, 并且没有放在正确的位置上, 才交换
      // 例如: 数值 3 应该放在索引 2 的位置上
      ;[nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]]
    }
  }

  // [1, -1, 3, 4]
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1
    }
  }
  // 都正确则返回数组长度 + 1
  return n + 1
}
```
