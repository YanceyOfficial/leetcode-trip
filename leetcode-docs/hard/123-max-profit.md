---
id: 123-max-profit
title: 买卖股票的最佳时机-iii
sidebar_label: 123. 买卖股票的最佳时机-iii
keywords:
  - Dynamic Programming
---

:::success Tips
题目类型: Dynamic Programming

相关题目:

- [121. 买卖股票的最佳时机](/leetcode/easy/121-max-profit)
- [122. 买卖股票的最佳时机-ii](/leetcode/easy/122-max-profit)
- [188. 买卖股票的最佳时机-iv](/leetcode/hard/188-max-profit)
- [309. 最佳买卖股票时机含冷冻期](/leetcode/medium/309-max-profit)
- [714. 买卖股票的最佳时机含手续费](/leetcode/medium/714-max-profit)

:::

## 题目

给定一个数组, 它的第 `i` 个元素是一支给定的股票在第 `i` 天的价格. 设计一个算法来计算你所能获取的最大利润. 你最多可以完成**两笔**交易. 注意: 你不能同时参与多笔交易(你必须在再次购买前出售掉之前的股票).

:::info 示例
输入: prices = [3,3,5,0,0,3,1,4]

输出: 6

解释: 在第 4 天(股票价格 = 0)的时候买入, 在第 6 天(股票价格 = 3)的时候卖出, 这笔交易所能获得利润 = 3-0 = 3.
随后, 在第 7 天(股票价格 = 1)的时候买入, 在第 8 天 (股票价格 = 4)的时候卖出, 这笔交易所能获得利润 = 4-1 = 3.
:::

## 题解

此时 maxK = 2, 意味着状态转移方程变成了, 但是这次与以前的题目不同, `k` 跟 `k - 1` 约不掉, 因此需要为 `k` 也做一次循环, 其他的还是走框架即可.

```ts
dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i])
dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i])
```

```ts
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const n = prices.length
  const maxK = 2

  // 注意初始化 JavaScript 的傻逼三维数组, 小心引用类型.
  const dp = new Array(n).fill(
    JSON.parse(JSON.stringify(new Array(maxK + 1).fill([0, 0]))),
  )

  for (let i = 0; i < n; i++) {
    for (let k = maxK; k >= 1; k--) {
      if (i === 0) {
        //   Math.max(dp[-1][0], dp[-1][1] + prices[0])
        // = Math.max(0, Number.NEGATIVE_INFINITY + prices[0])
        // = 0
        dp[0][k][0] = 0

        //   Math.max(dp[-1][1], -prices[0])
        // = Math.max(Number.NEGATIVE_INFINITY, -prices[0])
        // = -prices[0]
        dp[0][k][1] = -prices[0]

        continue
      }

      dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i])
      dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i])
    }
  }

  return dp[n - 1][maxK][0]
}
```
