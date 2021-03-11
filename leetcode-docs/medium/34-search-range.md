---
id: 34-search-range
title: 在排序数组中查找元素的第一个和最后一个位置
sidebar_label: 34. 在排序数组中查找元素的第一个和最后一个位置
---

## 题目

在从小到大排序的数组 nums 中, 找出 target

:::info 示例

输入:

输出:
:::

## 题解

这里是题解这里是题解这里是题解这里是题解这里是题解

```ts

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) {
      if (nums[left] < target) {
        left += 1
      }

      if (nums[right] > target) {
        right -= 1
      }

      if (nums[left] === target && nums[right] === target) {
        return [left, right]
      }
    } else if (nums[mid] < target) {
      left = mid + 1
    } else if (nums[mid] > target) {
      right = mid - 1
    }
  }
  return [-1, -1]
}

```
