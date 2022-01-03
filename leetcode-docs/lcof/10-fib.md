---
id: 10-fib
title: 斐波那契 / 青蛙跳台阶
sidebar_label: 10. 斐波那契 / 青蛙跳台阶
---

## 题目(斐波那契)

写一个函数, 输入 n , 求斐波那契数列的第 n 项. 斐波那契数列的定义如下, 斐波那契数列由 0 和 1 开始, 之后的斐波那契数就是由之前的两数相加而得出:

```ts
F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
```

## 题解(斐波那契)

```ts
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  const MOD = 1000000007
  if (n < 2) return n
  let prev = 0,
    curr = 0,
    sum = 1
  for (let i = 2; i <= n; ++i) {
    prev = curr
    curr = sum
    sum = (prev + curr) % MOD
  }
  return sum
}

```

## 题目(跳台阶)

:::success Tips
本题和 [70. 爬楼梯](/leetcode/easy/70-climb-stairs) 是一个题
:::

一只青蛙一次可以跳上 1 级台阶, 也可以跳上 2 级台阶. 求该青蛙跳上一个 n 级的台阶总共有多少种跳法.

:::info 示例

输入: 10

输出: 89
:::

## 题解(跳台阶)

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