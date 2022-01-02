---
id: 4-find-number-in-2d-array
title: 二维数组中的查找
sidebar_label: 4. 二维数组中的查找
---

## 题目

在一个 n \* m 的二维数组中, 每一行都按照从左到右递增的顺序排序, 每一列都按照从上到下递增的顺序排序. 请完成一个高效的函数, 输入这样的一个二维数组和一个整数, 判断数组中是否含有该整数.

:::info 示例

```ts
输入: arr = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
]

target = 5

输出: true
```

:::

## 题解

:::info
本题和 [240. 搜索二维矩阵-ii](/leetcode/medium/240-search-matrix) 是同一题.
:::

本题的关键在于使哪个元素作为起始元素, 可以用**左下角的元素**, 也可以用**右上角的元素**, 这里选用**左下角的元素**.

- 若 flag > target, 则 target 一定在 flag 所在行的上方, 即 flag 所在行可被消去.

- 若 flag < target, 则 target 一定在 flag 所在列的右方, 即 flag 所在列可被消去.

![4-find-number-in-2d-array](../../static/img/4-find-number-in-2d-array.png)

```ts
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
  let i = matrix.length - 1
  let j = 0

  while (i >= 0 && j < matrix[0].length) {
    if (matrix[i][j] > target) {
      i--
    } else if (matrix[i][j] < target) {
      j++
    } else {
      return true
    }
  }
  return false
}
```

## 复杂度分析

时间复杂度: O(M +N), 其中 N 和 M 分别为矩阵行数和列数, 此算法最多循环 M + N 次.

空间复杂度: O(1): i, j 指针使用常数大小额外空间.
