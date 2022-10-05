---
id: 62-unique-paths
title: 不同路径
sidebar_label: 62. 不同路径
keywords:
  - Dynamic Programming
---

:::success Tips
题目类型: Dynamic Programming
:::

## 题目

一个机器人位于一个 `m x n` 网格的左上角(起始点在下图中标记为 "Start"). 机器人每次只能向下或者向右移动一步. 机器人试图达到网格的右下角(在下图中标记为 "Finish"). 问总共有多少条不同的路径?

![62-unique-paths](../../static/img/62-unique-paths.jpg)

:::info 示例
输入: m = 3, n = 2

输出: 3

解释:

从左上角开始, 总共有 3 条路径可以到达右下角.

1. 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右
3. 向下 -> 向右 -> 向下

:::

## 题解

### 解法一

```ts
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const dp = new Array(n).fill(1)
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[j] += dp[j - 1]
    }
  }
  return dp[n - 1]
}
```

### 解法二

```ts
var uniquePaths = function (m, n) {
  let pre = new Array(n).fill(1)
  let cur = new Array(n).fill(1)
  for (let i = 1; i < m; i++) {
    for (let r = 1; r < n; r++) {
      cur[r] = cur[r - 1] + pre[r]
    }
    pre = cur.slice(0)
  }
  return pre[n - 1]
}
```

### 解法三

```ts
var uniquePaths = function (m, n) {
  const dp = new Array(m)
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(m)
    dp[i][0] = 1
  }
  for (let r = 0; r < m; r++) {
    dp[0][r] = 1
  }
  for (let j = 1; j < n; j++) {
    for (let z = 1; z < m; z++) {
      dp[j][z] = dp[j - 1][z] + dp[j][z - 1]
    }
  }
  return dp[n - 1][m - 1]
}
```
