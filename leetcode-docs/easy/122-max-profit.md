---
id: 122-max-profit
title: 买卖股票的最佳时机-ii
sidebar_label: 122. 买卖股票的最佳时机-ii
keywords:
  - Dynamic Programming
---

:::success Tips
题目类型: Dynamic Programming


相关题目:

- [121. 买卖股票的最佳时机](/leetcode/easy/121-max-profit)
- [123. 买卖股票的最佳时机-iii](/leetcode/hard/123-max-profit)
- [188. 买卖股票的最佳时机-iv](/leetcode/hard/188-max-profit)
- [309. 最佳买卖股票时机含冷冻期](/leetcode/medium/309-max-profit)
- [714. 买卖股票的最佳时机含手续费](/leetcode/medium/714-max-profit)

:::

## 题目

给定一个数组, 它的第 i 个元素是一支给定股票第 i 天的价格. 设计一个算法来计算你所能获取的最大利润. 你可以尽可能地完成更多的交易(多次买卖一支股票). 注意: 你不能同时参与多笔交易(你必须在再次购买前出售掉之前的股票).

:::info 示例

输入: [7,1,5,3,6,4]

输出: 7

解释: 在第 2 天(股票价格 = 1)的时候买入, 在第 3 天(股票价格 = 5)的时候卖出, 这笔交易所能获得利润为 5-1 = 4 . 随后, 在第 4 天(股票价格 = 3)的时候买入, 在第 5 天(股票价格 = 6)的时候卖出, 这笔交易所能获得利润为 6-3 = 3.
:::

## 题解

### 模版解法

这道题的特点是**尽可能地完成更多的交易**, 与第 [121. 买卖股票的最佳时机](/leetcode/easy/121-max-profit) 的 `k = 1` 相比, 这道题 `k = Infinity`, 其实也就是 `k` 跟 `k - 1` 可以理解成一样的了.

```ts
dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i])

dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i])
//          = Math.max(dp[i - 1][k][1], dp[i - 1][k][0] - prices[i])
```

此时发现 k 是常量了, 可以约去.

```ts
dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
```

因此直接撸模版就行了.

```ts
var maxProfit = function (prices) {
  const n = prices.length

  let dp_i_0 = 0,
    dp_i_1 = Number.NEGATIVE_INFINITY

  for (let i = 0; i < n; i++) {
    const temp = dp_i_0
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i])
    dp_i_1 = Math.max(dp_i_1, temp - prices[i])
  }
  return dp_i_0
}
```

### 优雅解法

```ts
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let sum = 0
  for (let i = 1; i < prices.length; i++) {
    sum += Math.max(prices[i] - prices[i - 1], 0)
  }
  return sum
}
```
