---
id: 240-search-matrix
title: 搜索二维矩阵-ii
sidebar_label: 240. 搜索二维矩阵-ii
---

## 题目

和 [4. 二维数组中的查找](/leetcode/lcof/4-find-number-in-2d-array) 重复, 解析直接看那道题.

## 题解

```ts
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
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
