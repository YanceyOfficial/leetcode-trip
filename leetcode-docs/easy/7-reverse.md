---
id: 7-reverse
title: 整数反转
sidebar_label: 7. 整数反转
keywords:
  - Math
---

## 题目

给你一个 32 位的有符号整数 x, 返回将 x 中的数字部分反转后的结果. 如果反转后整数超过 32 位的有符号整数的范围 [−2<sup>31</sup>, 2<sup>31</sup> − 1], 就返回 0.

:::info 示例

```ts
输入: 120

输出: 21
```

```ts
输入: -321

输出: -123
```

:::

## 题解

类似于把数字看成**栈**, `x % 10` 就是取栈顶数字(`peek`), 作为个位数追加到数字 `n` 上; 而 `x` 则删除掉**"栈尾"**元素(pop).

```ts
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let n = 0

  while (x) {
    n = n * 10 + (x % 10)
    x = (x - (x % 10)) / 10 // 或简单点: x / 10 | 0
  }

  // 这题不让超过 32 位的有符号整数
  // JavaScript 可以这么写, 别的语言恐怕得逐次判断(在 while 中判断)
  return n >= Math.pow(-2, 31) && n <= Math.pow(2, 31) - 1 ? n : 0
}
```
