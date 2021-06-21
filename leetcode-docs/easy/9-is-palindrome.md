---
id: 9-is-palindrome
title: 回文数
sidebar_label: 9. 回文数
---

## 题目

判断一个数字是否为回文数.

:::info 示例

输入: 12321

输出: true
:::

## 题解

跟第 [7. 整数反转](/leetcode/easy/7-reverse) 题如出一辙, 都是使用**取模逆排法**, 即通过把数字看成**栈**, 来将它反转. 前提可以做几个边界判断:

- 负数一定不是回文数
- 0 ~ 9 一定是回文数
- 10 的倍数一定不是回文数(除了 0)

```ts
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false
  if (x < 10) return true
  if (x % 10 === 0) return false

  let n = 0,
    y = x
  while (x) {
    // 取模逆排法
    n = n * 10 + (x % 10)
    x = (x - (x % 10)) / 10
  }
  return n === y
}
```
