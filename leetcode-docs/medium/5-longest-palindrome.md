---
id: 5-longest-palindrome
title: 最长回文子串
sidebar_label: 5. 最长回文子串
---

## 题目

给你一个字符串 s, 找到 s 中最长的回文子串.

:::info 示例

输入: s = "babad"

输出: "bab"

解释: "aba" 同样是符合题意的答案
:::

## 题解

中心扩散法.

```ts
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length < 2) return s

  let l = 0
  let r = 0

  for (let i = 0; i < s.length; i++) {
    // 回文子串长度是奇数
    helper(i, i)
    // 回文子串长度是偶数
    helper(i, i + 1)
  }

  function helper(m, n) {
    while (m >= 0 && n < s.length && s[m] === s[n]) {
      m--
      n++
    }
    // 注意此处 m, n 的值循环完后
    // 是恰好不满足循环条件的时刻, 如果此轮询得到回文串长度大于之前记录, 记录此轮循边界
    if (n - m > r - l) {
      l = m
      r = n
    }
  }
  return s.slice(l + 1, r)
}
```
