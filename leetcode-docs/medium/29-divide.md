---
id: 29-divide
title: 两数相除
sidebar_label: 29. 两数相除
---

## 题目

这里是题目这里是题目这里是题目这里是题目这里是题目

:::info 示例

输入:

输出:
:::

## 题解

任何数字都等于 Math.pow(2, 0) + Math.pow(2, 1) + ... + Math.pow(2, i)

因为: 商 r \* 除数 divisor = 被除数 dividend

所以商 r 用 2 的次幂表示: (Math.pow(2, 0) + Math.pow(2, 1) + ... + Math.pow(2, i)) \* 除数 divisor = 被除数 dividend

所以该题就变成了求 i, 使 2 的次幂累加结果, 逼近 dividend

除数 divisor \* Math.pow(2, i) = divisor << i

(divisor << i) < 被除数 dividend, 这里指绝对值

数值范围[−Math.pow(2, 31), Math.pow(2, 31) − 1], 所以:i <= 31

当 i 为 31 时, 1 << 31 为 -2147483648, 符号与 1 不一致; --1 << 31 为 -2147483648, 符号始终一致, 所以:只能使用负数计算

为使 (divisor << i) 不逾界, 需保证 divisor < (-1 << (31 - i))

因为是负数, 所以以上判断符号, < 变 >, > 变 <

```ts
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor, i = 0, r = 0, p = '') {
  dividend > 0 ? (dividend = -dividend) : (p = '-')
  divisor > 0 ? (divisor = -divisor) : (p = p ? '' : '-')
  while (dividend) {
    while (
      i <= 31 &&
      divisor >= -1 << (31 - i) &&
      divisor << i >= dividend &&
      ++i
    ) {}
    if (i === 0) {
      break
    }
    dividend = dividend - (divisor << --i)
    r += Math.pow(2, i)
    i = 0
  }
  return parseInt(p + (!p && r >= 2147483648 ? 2147483647 : r))
}
```
