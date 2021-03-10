---
id: 704-search
title: 二分查找
sidebar_label: 704. 二分查找
---

## 题目

给定一个 n 个元素有序的(升序)整型数组 nums 和一个目标值 target, 写一个函数搜索 nums 中的 target, 如果目标值存在返回下标, 否则返回 -1.

## 题解

1. 将数组的第一个位置设置为下边界(0).
2. 将数组最后一个元素所在的位置设置为上边界(数组的长度减 1).
3. 若下边界等于或小于上边界, 则做如下操作.
   1. 将中点设置为(上边界加上下边界)除以 2.
   2. 如果中点的元素小于查询的值, 则将下边界设置为中点元素所在下标加 1.
   3. 如果中点的元素大于查询的值, 则将上边界设置为中点元素所在下标减 1.
   4. 否则中点元素即为要查找的数据, 可以进行返回.

```ts
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let low = 0
  let high = nums.length - 1
  while (low <= high) {
    const mid = Math.floor((low + high) / 2)

    if (nums[mid] < target) {
      low = mid + 1
    } else if (nums[mid] > target) {
      high = mid - 1
    } else {
      return mid
    }
  }
  return -1
}
```
