---
id: 172-trailing-zeroes.md
title: 阶乘后的零
sidebar_label: 172. 阶乘后的零
---

## 题目

输入一个非负整数 n, 计算阶乘 n! 的结果末尾有几个 0.

:::note 示例

输入: `n = 5`

输出: `1`
:::

## 题解

能产生 0 的最小原子是 `5 * 2`, 并且 5 的数量一定小于 2, 因此这道题就变成了**阶乘中的各个数字, 能分解出多少个 `5`**.

以 25! 为例: 5 可以提供一个, 10 可以提供一个, 15 可以提供一个, 20 可以提供一个, 25 可以提供两个, 总共有 6 个因子 5, 所以 25! 的结果末尾就有 6 个 0. 因此难点就在于这种 **25 可以提供两个, 125 提供 3 个的这种情况.**

```js
/**
 * @param {number} n
 * @retburn {number}
 */
var trailingZeroes = function (n) {
  let total = 0

  while (n >= 5) {
    n = Math.floor(n / 5)
    total += n
  }
  return total
}
```
