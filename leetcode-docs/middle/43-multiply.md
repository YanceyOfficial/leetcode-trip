---
id: 43-multiply
title: 字符串相乘(大数相乘)
sidebar_label: 43. 字符串相乘(大数相乘)
---

## 题目

大数相乘, 本题为 [415-大数相加](../easy/415-add-string.md) 的进阶版. 首先要明确一些规律:

1. 两数相加的位数, 最多为**位数多的那个数的位数加一**, 即 `Math.max(len1, len2) + 1`
2. 两数相乘的位数, 最多为**两个数的位数之和**, 即 `len1 + len2`

平时我们计算乘法都是通过列竖式, 这里以 123 \* 64 为例. 不难发现, 形成中间 492 和 738 其实是一个双循环操作, 以保证每位都能乘在一起, 并在这个过程中处理**进位**; 然后再按位进行加和.

```js
  1 2 3
    6 4
-------
  4 9 2
7 3 8
-------
7 8 7 2
```

而如果用程序写, 我们可以双循环和按位加和一起做, 最后处理进位问题, 大抵思路如下:

```js
  1  2  3
     6  4
----------
  4  8  12
6 12 18
----------
6 16 26 12 => 处理进位问题
```

## 题解

```js
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  // 排除等于 0 的情况, 就不往下折腾了
  if (num1 === '0' || num2 === '0') return '0'

  const len1 = num1.length
  const len2 = num2.length

  // 遵循上面的规律: 两数相乘的位数, 最多为两个数的位数之和
  // 因此朴素的两数相乘位数为 len1 + len2 - 1
  const len = len1 + len2 - 1
  const res = new Array(len).fill(0)

  // 做双循环, 保证每个位置都能乘在一起
  for (let i = 0; i < len2; i++) {
    for (let j = 0; j < len1; j++) {
      // 按位加和, 注意这里的加和可能会超过 10, 甚至更多, 不过暂时不用 care, 下面再处理进位问题
      res[i + j] += +num2[i] * +num1[j]
    }
  }

  let str = ''
  let carry = 0

  // 处理进位
  for (let k = len - 1; k >= 0; k--) {
    const sum = res[k] + carry

    // 将小于 10 的部分作为最终该位的结果
    str = (sum % 10) + str

    // 将大于 10 的部分作为 carry 往前赶
    carry = (sum / 10) | 0
  }

  // 考虑结束循环仍有进位的情况, 把 carry 放到最前面即可
  return carry > 0 ? carry + str : str
}
```
