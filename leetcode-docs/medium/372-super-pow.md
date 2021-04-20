---
id: 372-super-pow
title: 超级次方
sidebar_label: 372. 超级次方
---

## 题目

你的任务是计算 `a^b` 对 `1337` 取模，a 是一个正整数，b 是一个非常大的正整数且会以数组形式给出.

:::info 示例

输入: a = 2147483647, b = [2,0,0]

输出: 1198

解释: 其实就是求 `2147483647^200 % 1337`
:::

## 题解

这道题的难点有三:

1. 如何处理用数组表示的指数
2. 

```ts
/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = function (a, b) {}
```
