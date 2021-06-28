---
id: 74-search-matrix
title: 搜索二维矩阵
sidebar_label: 74. 搜索二维矩阵
---

## 题目

编写一个高效的算法来判断 Matrix 矩阵中, 判断是否存在一个目标值 target. 该矩阵具有如下特性:

- 每行中的整数从左到右按升序排列.
- 每行的第一个整数大于前一行的最后一个整数.

:::info 示例

输入: `matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 3`

输出: `true`
:::

## 题解

看到已排序的数组找某个值, 就先想到二分查找. 虽然这是个**二维数组**, 但你仍然可以看成一个**一维数组**.

1. 先算出二维数组的总长度 `row * column`, 那么 right 就是 `row * column - 1`
2. 下面是常规的二分查找套路, 只不过找到 mid 对应的元素稍微费事些: `matrix[(mid / column) | 0][mid % column]`

```ts
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const row = matrix.length
  const column = matrix[0].length

  let left = 0
  let right = row * column - 1

  while (left <= right) {
    const mid = ((left + right) / 2) | 0
    const midEl = matrix[(mid / column) | 0][mid % column]
    if (midEl > target) {
      right = mid - 1
    } else if (midEl < target) {
      left = mid + 1
    } else {
      return true
    }
  }

  return false
}
```

## 复杂度

时间复杂度: O(log(mn))
空间复杂度: O(1)
