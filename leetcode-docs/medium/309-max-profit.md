---
id: 309-max-profit
title: 最佳买卖股票时机含冷冻期
sidebar_label: 309. 最佳买卖股票时机含冷冻期
keywords:
  - Dynamic Programming
---

:::success Tips
题目类型: Dynamic Programming

相关题目:

- [121. 买卖股票的最佳时机](/leetcode/easy/121-max-profit)
- [122. 买卖股票的最佳时机-ii](/leetcode/easy/122-max-profit)
- [123. 买卖股票的最佳时机-iii](/leetcode/hard/123-max-profit)
- [188. 买卖股票的最佳时机-iv](/leetcode/hard/188-max-profit)
- [714. 买卖股票的最佳时机含手续费](/leetcode/medium/714-max-profit)

:::

## 题目

给定一个整数数组, 其中第 i 个元素代表了第 i 天的股票价格. 设计一个算法计算出最大利润. 在满足以下约束条件下, 你可以尽可能地完成更多的交易(多次买卖一支股票):

- 你不能同时参与多笔交易(你必须在再次购买前出售掉之前的股票).
- 卖出股票后, 你无法在第二天买入股票 (即冷冻期为 1 天).

:::info 示例
输入: [1,2,3,0,2]

输出: 3

解释: 对应的交易状态为: [买入, 卖出, 冷冻期, 买入, 卖出]
:::

## 题解

这道题是在 [122. 买卖股票的最佳时机-ii](/leetcode/easy/122-max-profit) 的基础衍生的, **卖出股票后, 你无法在第二天买入股票**, 也就是第 `i` 天选择买的时候, 要从 `i - 2` 状态转移, 而非 `i - 1`.

```ts
dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])

// 第 `i` 天选择买的时候, 要从 `i - 2` 状态转移, 而非 `i - 1`.
dp[i][1] = Math.max(dp[i - 1][1], dp[i - 2][0] - prices[i])
```

```ts
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const n = prices.length

  let dp_i_0 = 0,
    dp_i_1 = Number.NEGATIVE_INFINITY,
    dp_pre_0 = 0 //  代表第 i - 2 天

  for (let i = 0; i < n; i++) {
    const temp = dp_i_0
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i])
    dp_i_1 = Math.max(dp_i_1, dp_pre_0 - prices[i])
    dp_pre_0 = temp
  }
  return dp_i_0
}
```
