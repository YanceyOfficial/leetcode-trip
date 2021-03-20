---
id: bit-manipulation
title: 位运算的一些技巧
sidebar_label: 位运算的一些技巧
---

## 判断两个数是否异号

利用补码编码的符号位, 如果小于 0, 则证明两数字异号, 这种方式可以用于小数. 当然, 你可以使用 [Math.sign](https://js.yanceyleo.com/docs/Math/sign/) 分别判断两个数字的正负.

```js
const isContrarySign = (-1 ^ 1) < 0 // true

const isContrarySign = (2 ^ 1) < 0 // false
```

## n & (n - 1)

<img src="../static/img/191-hamming-weight.png" alt="191-hamming-weight" style={{background: '#fff'}} />

其核心逻辑是 n - 1 一定可以消除最后一个 1, 同时把其后的 0 都变成 1, 这样再和 n 做一次 & 运算, 就可以仅仅把最后一个 1 变成 0 了.

:::info 相关题目

[位 1 的个数](/leetcode/easy/191-hamming-weight)

[2 的幂](/leetcode/easy/231-is-power-of-two)

:::

## 按位异或(XOR)

### 这三条可以针对任何进制

- a ^ a = 0
- a ^ 0 = a
- a ^ -1 = ~a

### 对于二进制

| a   | b   | a XOR b |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 1       |
| 1   | 0   | 1       |
| 1   | 1   | 0       |

:::info 相关题目

[136. 只出现一次的数字](/leetcode/easy/136-single-number)

:::

## 扩展

关于位运算的更多骚操作可以戳 [Bit Twiddling Hacks](http://graphics.stanford.edu/~seander/bithacks.html#ReverseParallel).
