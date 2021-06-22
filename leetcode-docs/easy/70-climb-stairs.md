---
id: 70-climb-stairs
title: 爬楼梯
sidebar_label: 70. 爬楼梯
keywords:
  - Dynamic Programming
  - Recursive
---

:::success Tips
题目类型: Dynamic Programming, Recursive
:::

## 题目

假设你正在爬楼梯. 需要 n 阶你才能到达楼顶. 每次你可以爬 1 或 2 个台阶. 你有多少种不同的方法可以爬到楼顶呢?

:::info 示例

输入: 10

输出: 89
:::

## 题解

### 动态规划

```ts
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const dp = []
  dp[0] = 1
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}
```

### 另一种方法

这道题跟求斐波那契数差不多, 只关心 n 的前两个状态, 因此只要存储前两个即可.

```ts
var climbStairs = function (n) {
  if (n < 2) return n

  let prev = 1
  let curr = 1

  for (let i = 2; i <= n; i++) {
    const sum = prev + curr
    prev = curr
    curr = sum
  }
  return curr
}
```

### 递归

再来个递归嘻嘻, 不过超时了 TAT.

```ts
var climbStairs = function (n) {
  if (n <= 2) return n

  return climbStairs(n - 1) + climbStairs(n - 2)
}
```
