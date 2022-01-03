---
id: 10-fib
title: 斐波那契数列
sidebar_label: 10. 斐波那契数列
---

## 题目

写一个函数, 输入 n , 求斐波那契数列的第 n 项. 斐波那契数列的定义如下, 斐波那契数列由 0 和 1 开始, 之后的斐波那契数就是由之前的两数相加而得出:

```ts
F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
```

## 题解

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
