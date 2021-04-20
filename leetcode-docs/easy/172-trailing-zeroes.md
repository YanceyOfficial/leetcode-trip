---
id: 172-trailing-zeroes
title: 阶乘后的零
sidebar_label: 172. 阶乘后的零
---

## 题目

输入一个非负整数 n, 计算阶乘 n! 的结果末尾有几个 0.

:::info 示例

输入: `n = 5`

输出: `1`
:::

## 题解

能产生 0 的最小原子是 `5 * 2`, 并且 5 的数量一定小于 2, 因此这道题就变成了**阶乘中的各个数字, 能分解出多少个 `5`**.

以 125! 为例:

- 125 / 5 = 25, 这一步就是计算有多少个像 5, 15, 20, 25, 30 这些 5 的倍数, 它们一定至少可以提供一个因子 5.
- 但对于 25, 50, 75 这种, 它们能提供两个 5, 因此 125 / 25 = 5, 故还有 5 个数字(25, 50, 75, 100, 125) 能多提供一个 5.
- 对于 125, 125 / 125 = 1, 它还能多提供一个 5

因此 125! 总共能提供 25 + 5 + 1 = 31 个 5, 即 125! 后面有 31 个 0.

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

### 时间复杂度

时间复杂度是底数为 5 的对数, 也就是 O(logN)

## 附录: 也可以用递归

```ts
function trailingZeroes(n) {
  return n < 5 ? 0 : n / 5 + Math.floor(trailingZeroes(n / 5))
}
```
