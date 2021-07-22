---
id: 647-count-substrings
title: 回文子串
sidebar_label: 647. 回文子串
keywords:
  - Dynamic Programming
---

:::success Tips
题目类型: Dynamic Programming

相关题目:

- [5. 最长回文子串](/leetcode/medium/5-longest-palindrome)

:::

## 题目

给定一个字符串, 你的任务是计算这个字符串中有多少个回文子串. 具有不同开始位置或结束位置的子串, 即使是由相同的字符组成, 也会被视作不同的子串.

:::info 示例

```ts
输入: 'abc'
输出: 3
解释: 三个回文子串: 'a', 'b', 'c'
```

```ts
输入: 'aaa'
输出: 6
解释: 六个回文子串: 'a', 'a', 'a', 'aa', 'aa', 'aaa'
```

:::

## 题解

```ts
/**
 * @param {string} s
 * @return {number}
 */

var countSubstrings = function (s) {
  const len = s.length
  let total = 0
  for (let i = 0; i < len; i++) {
    total += helpers(i, i)
    total += helpers(i, i + 1)
  }

  function helpers(m, n) {
    let count = 0
    while (m >= 0 && n < len && s[m] === s[n]) {
      count++
      m--
      n++
    }
    return count
  }

  return total
}
```
