---
id: 20-is-valid
title: 有效的括号
sidebar_label: 20. 有效的括号
keywords:
  - Stack
---

## 题目

给定一个只包括 `(`, `)`, `{`, `}`, `[`, `]` 的字符串 s, 判断字符串是否有效. 有效字符串需满足:

- 左括号必须用相同类型的右括号闭合
- 左括号必须以正确的顺序闭合

:::info 示例

```ts
输入: s = '()[]{}'
输出: true
```

```ts
输入: s = '(]'
输出: false
```

:::

## 题解

遇见括号问题先想到栈. 遍历字符串, 如果遇到 `(`, `{`, `[`, 压入栈中; 如果遇到 `)`, `}`, `]`, 看看栈顶能不能找到对应的左括号, 如果找到, 就弹出栈顶元素, 否则就匹配不上了. 最终如果是有效的括号, 栈在遍历完后应该是空的.

```ts
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const n = s.length
  if (n % 2) return false

  let stack = []
  for (let i = 0; i < n; i += 1) {
    if (s[i] === '{' || s[i] === '[' || s[i] === '(') {
      stack.push(s[i])
    } else {
      const top = stack[stack.length - 1]
      if (top === '{' && s[i] === '}') stack.pop()
      else if (top === '[' && s[i] === ']') stack.pop()
      else if (top === '(' && s[i] === ')') stack.pop()
      else return false
    }
  }

  return stack.length === 0
}
```
