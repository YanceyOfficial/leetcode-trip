---
id: 67-add-binary
title: 二进制求和
sidebar_label: 67. 二进制求和
---

:::success Tips

相关题目:

- [43. 字符串相乘(大数相乘)](/leetcode/easy/43-multiply)
- [415. 字符串相加(大数相加)](/leetcode/easy/415-add-string)
- [445. 两数相加 II(大数相加链表版)](/leetcode/medium/445-add-strings)

:::

## 题目

二进制的大数相加.

:::info 示例

输入:

输出:
:::

## 题解

这里是题解这里是题解这里是题解这里是题解这里是题解

```ts
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  const len = Math.max(a.length, b.length)

  a = a.padStart(len, 0)
  b = b.padStart(len, 0)

  let carry = 0
  let res = ''

  for (let i = len - 1; i >= 0; i--) {
    const sum = +a[i] + +b[i] + carry
    carry = (sum / 2) | 0
    res = (sum % 2) + res
  }

  return carry === 0 ? res : `1${res}`
}
```

## 附录

ES10 出了一个新的基础类型 [BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt).

```ts
var addBinary = function (a, b) {
  return (BigInt('0b' + a) + BigInt('0b' + b)).toString(2)
}
```
