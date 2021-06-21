---
id: 1-two-sum
title: 两数之和
sidebar_label: 1. 两数之和
keywords:
  - HashMap
---

## 题目

给你一个数组 nums 和一个整数 target, 数组中保证存在两个数的和为 target, 请你返回这两个数的索引.

## 题解

创建一个哈希表, 遍历数组, 将元素存储到哈希表中, 如果 target - nums[i] 存在于哈希表中, 那么就找到了这两个相加等于 target 的元素.

```ts
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map()

  for (let i = 0; i < nums.length; i += 1) {
    const dif = target - nums[i]

    if (map.has(dif)) {
      return [map.get(dif), i]
    }

    map.set(nums[i], i)
  }
}
```

## 复杂度

时间复杂度和空间复杂度都为 O(n)
