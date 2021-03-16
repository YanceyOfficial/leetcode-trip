---
id: 154-find-min
title: 寻找旋转排序数组中的最小值-ii
sidebar_label: 154. 寻找旋转排序数组中的最小值-ii
---

## 题目

这个题是 [153.寻找旋转排序数组中的最小值](../medium/153-find-min.md) 的扩展版, 也就是旋转数组中的元素可重复.

:::info 示例

输入: [2, 2, 3, 0, 2, 2]

输出: 0
:::

## 题解

比起第 153 题, 这里需要关注 `nums[pivot]` 跟 `nums[high]` 相等的情况, 因为在 [mid, high] 的这个小区间里, 右边的数字一定大于等于左边的, 因此 `nums[pivot]` 跟 `nums[high]` 相等时, `high = high - 1` 即可.

```ts
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let low = 0
  let high = nums.length - 1

  while (low < high) {
    const pivot = (low + (high - low) / 2) | 0

    if (nums[pivot] > nums[high]) {
      low = pivot + 1
    } else if (nums[pivot] < nums[high]) {
      high = pivot
    } else {
      high -= 1
    }
  }
  return nums[low]
}
```
