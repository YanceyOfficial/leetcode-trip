---
id: 121-max-profit
title: 买卖股票的最佳时机
sidebar_label: 121. 买卖股票的最佳时机
keywords:
  - Dynamic Programming
---

:::success Tips
题目类型: Dynamic Programming

相关题目:

- [122. 买卖股票的最佳时机-ii](/leetcode/easy/122-max-profit)
- [123. 买卖股票的最佳时机-iii](/leetcode/hard/123-max-profit)
- [188. 买卖股票的最佳时机-iv](/leetcode/hard/188-max-profit)
- [309. 最佳买卖股票时机含冷冻期](/leetcode/medium/309-max-profit)
- [714. 买卖股票的最佳时机含手续费](/leetcode/medium/714-max-profit)

:::

## 题目

给定一个数组, 它的第 i 个元素是一支给定股票第 i 天的价格. 如果你最多只允许完成一笔交易(即买入和卖出一支股票), 设计一个算法来计算你所能获取的最大利润. 注意你不能在买入股票前卖出股票.

:::info 示例
输入: [7,1,5,3,6,4]

输出: 5

解释: 在第 2 天(股票价格 = 1)的时候买入, 在第 5 天(股票价格 = 6)的时候卖出, 最大利润 = 6-1 = 5.
注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格.
:::

## 题解

框架镇楼:

```ts
// base case
dp[-1][k][0] = dp[i][0][0] = 0
dp[-1][k][1] = dp[i][0][1] = Number.NEGATIVE_INFINITY

// 状态转移方程
dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i])
dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i])
```

本题中 `k = 1`, 直接套用上面模版:

```ts
dp[i][1][0] = Math.max(dp[i - 1][1][0], dp[i - 1][1][1] + prices[i])
dp[i][1][1] = Math.max(dp[i - 1][1][1], dp[i - 1][0][0] - prices[i])

// p[i - 1][0][0] 命中 base case, 可化简成这个
dp[i][1][1] = Math.max(dp[i - 1][1][1], -prices[i])

// 因为 k = 1 为常量, 不会发生变化, 因此可以继续化简
dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
dp[i][1] = Math.max(dp[i - 1][1], -prices[i])
```

因此我们可以直接套用模版, 注意考察两个特殊情况 `dp[0][0]` 和 `dp[0][1]`.

```ts
var maxProfit = function (prices) {
  const n = prices.length
  const dp = new Array(n).fill([0, 0])

  //   Math.max(dp[-1][0], dp[-1][1] + prices[0])
  // = Math.max(0, Number.NEGATIVE_INFINITY + prices[0])
  // = 0
  dp[0][0] = 0

  //   Math.max(dp[-1][1], -prices[0])
  // = Math.max(Number.NEGATIVE_INFINITY, -prices[0])
  // = -prices[0]
  dp[0][1] = -prices[0]

  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], -prices[i])
  }

  return dp[n - 1][0]
}
```

根据上面的代码, 我们能看出新状态之和前一个状态有关, 即 `dp[i][0]` 和 `dp[i - 1][0]`, 因此我们可以将二维数组优化成一维数组的形式.

```ts
dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
dp[i][1] = Math.max(dp[i - 1][1], -prices[i])
```

最终结果如下:

```ts
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let n = prices.length

  // dp[-1][k][0] = 0
  let dp_i_0 = 0

  // dp[-1][k][1] = Number.NEGATIVE_INFINITY
  let dp_i_1 = Number.NEGATIVE_INFINITY

  for (let i = 0; i < n; i++) {
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i])
    dp_i_1 = Math.max(dp_i_1, -prices[i])
  }
  return dp_i_0
}
```
