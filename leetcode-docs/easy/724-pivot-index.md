---
id: 724-pivot-index
title: 寻找数组的中心下标
sidebar_label: 724. 寻找数组的中心下标
---

## 题目

给你一个整数数组 nums, 请编写一个能够返回数组"中心下标"的方法. 数组**中心下标**的定义是:

- 数组的一个下标, **其左侧所有元素相加的和等于右侧所有元素相加的和**
- 如果数组不存在中心下标, 返回 -1
- 如果数组有多个中心下标, 应该返回最靠近左边的那一个

:::info 示例

```ts
输入: nums = [1, 7, 3, 6, 5, 6]
输出: 3
解释: 左侧数之和: 1 + 7 + 3 = 11, 右侧数之和: 5 + 6 = 11
```

```ts
输入: nums = [1, 2, 3]
输出: -1
解释: 数组中不存在满足此条件的中心下标
```

```ts
输入: nums = [2, 1, -1]
输出: 0
解释: 下标 0 左侧不存在元素, 视作和为 0, 右侧数之和为 1 + (-1) = 0

```

:::

## 题解

1. 先求出整个数组的总和
2. 做一波遍历, **总和 - 当前元素 - 左边子数组总和** 就是**右边子数组的总和**, 如果**左边子数组总和**跟**右边子数组的总和**相等, 也就找到了中心下标, 否则返回 -1.

```ts
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const len = nums.length
  const sum = nums.reduce((acc, val) => acc + val)
  let leftSum = 0

  for (let i = 0; i < len; i++) {
    if (sum - nums[i] - leftSum === leftSum) {
      return i
    }
    leftSum += nums[i]
  }

  return -1
}
```
