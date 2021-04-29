---
id: 32-longest-valid-parentheses
title: 最长有效括号
sidebar_label: 32. 最长有效括号
---

## 题目

给你一个只包含 `(` 和 `)` 的字符串, 找出最长有效(格式正确且连续)括号子串的长度.

:::info 示例
输入: s = `)()())`

输出: 4

解释: 最长有效括号子串是 `()()`
:::

## 题解

这题能用动态规划解决, 不过看到括号匹配先想到栈.

```ts
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  const n = s.length
  const stack = [-1]

  let max = 0
  for (let i = 0; i < n; i++) {
    const curr = s[i]
    if (curr === '(') {
      stack.push(i)
    } else {
      stack.pop()

      if (stack.length !== 0) {
        max = Math.max(i - stack[stack.length - 1], max)
      } else {
        stack.push(i)
      }
    }
  }

  return max
}
```
