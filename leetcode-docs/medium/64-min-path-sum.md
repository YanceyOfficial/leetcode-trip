---
id: 64-min-path-sum
title: 最小路径和
sidebar_label: 64. 最小路径和
keywords:
  - Dynamic Programming
---

:::success Tips
题目类型: Dynamic Programming
:::

## 题目

给定一个包含非负整数的 `M x N` 网格 grid, 请找出一条从左上角到右下角的路径, 使得路径上的数字总和为最小.

说明: 每次只能向下或者向右移动一步.

:::info 示例
输入: grid = [[1,3,1],[1,5,1],[4,2,1]]

输出: 7

解释: 因为路径 1→3→1→1→1 的总和最小.
:::

## 题解

```ts
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const rows = grid.length
  const columns = grid[0].length

  if (rows === 0 || columns === 0) return 0

  const dp = []
  for (let i = 0; i < rows; i++) {
    dp.push(new Array(columns).fill(0))
  }

  // dp[i][j] 表示从左下角走到 i, j 的最小路径和
  dp[0][0] = grid[0][0] // base case

  // 一直往右走
  for (let i = 1; i < rows; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0]
  }

  // 一直往下走
  for (let j = 1; j < columns; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j]
  }

  // 左和右都走可能走, 比较值
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < columns; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
    }
  }

  return dp[rows - 1][columns - 1]
}
```
