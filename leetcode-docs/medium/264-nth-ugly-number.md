---
id: 264-nth-ugly-number
title: 丑数-ii
sidebar_label: 264. 丑数-ii
keywords:
  - Dynamic Programming
---

:::success Tips
题目类型: Dynamic Programming

相关题目:

- [263. 丑数](/leetcode/easy/263-is-ugly)
:::

## 题目

编写一个程序, 找出第 n 个丑数. 丑数就是质因数只包含 2, 3, 5 的**正整数**.

:::info 示例

输入: n = 10

输出: 12

解释: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 是前 10 个丑数, 那么第十个就是 12
:::

## 题解

TODO: 动态规划

```ts
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  const dp = new Array(n + 1).fill(0)
  dp[1] = 1
  let p2 = 1,
    p3 = 1,
    p5 = 1
  for (let i = 2; i <= n; i++) {
    // 找到下一个最小的丑数
    const num2 = dp[p2] * 2,
      num3 = dp[p3] * 3,
      num5 = dp[p5] * 5
    dp[i] = Math.min(Math.min(num2, num3), num5)

    // 最小的丑数已经找到了, 因此对应的指针需要 +1
    if (dp[i] === num2) {
      p2++
    }
    if (dp[i] === num3) {
      p3++
    }
    if (dp[i] === num5) {
      p5++
    }
  }
  return dp[n]
}
```
