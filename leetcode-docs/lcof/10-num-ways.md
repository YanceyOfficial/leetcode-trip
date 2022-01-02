---
id: 10-num-ways
title: 青蛙跳台阶问题
sidebar_label: 10. 青蛙跳台阶问题
---

## 题目

:::success Tips
本题和 [70. 爬楼梯](/leetcode/easy/70-climb-stairs) 是一个题
:::

一只青蛙一次可以跳上 1 级台阶, 也可以跳上 2 级台阶. 求该青蛙跳上一个 n 级的台阶总共有多少种跳法.

:::info 示例

输入: 10

输出: 89
:::

## 题解

```ts
/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
  const MOD = 1000000007
  if (n === 0) return 1
  if (n < 2) return n

  let prev = 1
  let curr = 1

  for (let i = 2; i <= n; i++) {
    const sum = prev + curr
    prev = curr
    curr = sum % MOD
  }
  return curr
}
```
