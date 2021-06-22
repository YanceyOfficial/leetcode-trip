---
id: 415-add-string
title: 字符串相加(大数相加)
sidebar_label: 415. 字符串相加(大数相加)
---

## 题目

大数相加, 懂得人自然懂.

## 题解

1. 先取两个字符串中最大的长度
2. 短的那个前面补 0 以保证两者对齐
3. 写个 for 循环, 从后往前逐位加和, 注意如果加和 >= 10, 说明要进位, 记 carry 为 1
4. 最后循环完了, 如果发现 carry 还是 1, 说明最后一次加和仍然要进位, 那就在最前面补个 1 即可

```js
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  const len = Math.max(num1.length, num2.length)
  num1 = num1.padStart(len, 0)
  num2 = num2.padStart(len, 0)

  let carry = 0
  let res = ''

  for (let i = len - 1; i >= 0; i--) {
    const sum = +num1[i] + +num2[i] + carry
    carry = (sum / 10) | 0
    res = (sum % 10) + res
  }

  return carry === 0 ? res : `1${res}`
}
```

## 类似题目

[43-大数相乘](/leetcode/medium/43-multiply)
