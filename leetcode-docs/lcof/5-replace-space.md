---
id: 5-replace-space
title: 替换空格
sidebar_label: 5. 替换空格
---

## 题目

请实现一个函数，把字符串 s 中的每个空格替换成`%20`.

:::info 示例

输入: s = "We are happy."

输出: "We%20are%20happy."

:::

## 题解

```ts
/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  const n = s.length
  let res = ''
  for (let i = 0; i < n; i++) {
    if (s[i] === ' ') {
      res += '%20'
    } else {
      res += s[i]
    }
  }

  return res
}
```
