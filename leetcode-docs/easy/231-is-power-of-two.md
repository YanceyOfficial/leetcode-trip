---
id: 231-is-power-of-two
title: 2的幂
sidebar_label: 231. 2的幂
---

## 题目

判断一个数字是否为 2 的 n 次幂.

## 题解

:::success Tips
题目类型: 位运算, 数学

相关题目: [136. 只出现一次的数字](/leetcode/easy/136-single-number), [191. 位 1 的个数](/leetcode/easy/191-hamming-weight),
:::

### 使用 `n & (n - 1)`

如果一个数是 2 的指数, 那么它的二进制**有且仅有一个 1**.

```js
2 ^ 0 = 1 = 0b0001
2 ^ 1 = 2 = 0b0010
2 ^ 2 = 4 = 0b0100
```

因此通过使用 n & (n - 1), 把这个 1 去掉, 剩下的如果等于 0, 就证明是 2 的指数. 关于使用 n & (n - 1), 这里不再赘述, 可访问 [位运算的一些技巧](/algorithm-design/bit-manipulation/bit-manipulation#n--n---1).

```js
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n <= 0) return false
  return (n & (n - 1)) == 0
}
```

### 使用数学方法

通过数学计算, 不管是 2 的幂, 3 的幂还是 4 的幂, 都可以用以下方案解决.

```js
var isPowerOfTwo = function (n) {
  return (Math.log10(n) / Math.log10(2)) % 1 === 0
}
```
