---
id: 11-min-array
title: 旋转数组的最小数字
sidebar_label: 11. 旋转数组的最小数字
---

## 题目

:::success Tips

相关题目:

- [33.搜索旋转排序数组](/leetcode/medium/33-search)
- [81. 搜索旋转排序数组-ii](/leetcode/medium/81-search)
- [153.寻找旋转排序数组中的最小值](/leetcode/medium/153-find-min)

本题和 [154. 寻找旋转排序数组中的最小值-ii](/leetcode/hard/154-find-min) 是一个题

:::

把一个数组最开始的若干个元素搬到数组的末尾, 我们称之为数组的旋转.

给你一个可能存在**重复**元素值的数组 numbers, 它原来是一个升序排列的数组, 并按上述情形进行了一次旋转.
请返回旋转数组的最小元素. 例如, 数组  [3, 4, 5, 1, 2] 为 [1, 2, 3, 4, 5] 的一次旋转, 该数组的最小值为 1.

:::info 示例

输入: [3, 4, 5, 1, 2]

输出: 1

:::

## 题解

```ts
/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  let low = 0,
    high = numbers.length - 1

  while (low <= high) {
    const pivot = low + Math.floor((high - low) / 2)
    if (numbers[pivot] < numbers[high]) {
      high = pivot
    } else if (numbers[pivot] > numbers[high]) {
      low = pivot + 1
    } else {
      high -= 1
    }
  }

  return numbers[low]
}
```
