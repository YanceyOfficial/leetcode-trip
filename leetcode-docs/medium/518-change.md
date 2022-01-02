---
id: 518-change
title: 零钱兑换-ii
sidebar_label: 518. 零钱兑换-ii
keywords:
  - Dynamic Programming
---

:::success Tips
题目类型: Dynamic Programming

相关题目:

- [322. 零钱兑换(完全背包问题)](/leetcode/medium/322-coin-change)

:::

## 题目

给定不同面额的硬币和一个总金额. 写出函数来计算可以凑成总金额的硬币组合数. 假设每一种面额的硬币有无限个.

:::info 示例

输入: amount = 5, coins = [1, 2, 5]

输出: 4

解释: 有四种方式可以凑成总金额:

- 5=5
- 5=2+2+1
- 5=2+1+1+1
- 5=1+1+1+1+1

:::

## 题解

`dp[i]` 代表装满容量为 j 的背包有几种硬币组合, 转移方程为 `dp[i] = dp[i] + dp[i - coin]`, 也就是当前填满 j 容量的方法数 = 之前填满 j 容量的硬币组合数 + 填满 j - coin 容量的硬币组合数.

```ts
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  const n = amount + 1
  const dp = new Array(n).fill(0)

  dp[0] = 1
  for (const coin of coins) {
    for (let i = coin; i < n; i++) {
      dp[i] += dp[i - coin]
    }
  }
  return dp[amount]
}
```
