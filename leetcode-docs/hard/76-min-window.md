---
id: 76-min-window
title: 最小覆盖子串
sidebar_label: 76. 最小覆盖子串
---

## 题目

给你一个字符串 s 和 t, 请返回 s 中涵盖 t 所有字符的最小子串. 如果 s 中不存在涵盖 t 所有字符的子串, 则返回空字符串.

注意: 如果 s 中存在这样的子串, 我们保证它是唯一的答案.

:::info 示例

输入: s = "ADOBECODEBANC", t = "ABC"

输出: BANC
:::

## 题解

如其名, 滑动窗口

```ts
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const need = {}
  const window = {}

  for (const i of t) {
    need[i] ? (need[i] += 1) : (need[i] = 1)
  }

  const needLen = Object.keys(need).length

  let left = 0,
    right = 0

  let valid = 0

  let start = 0,
    len = Number.MAX_SAFE_INTEGER

  while (right < s.length) {
    const c = s[right]
    right++

    if (need[c]) {
      window[c] ? (window[c] += 1) : (window[c] = 1)

      if (window[c] === need[c]) {
        valid++
      }
    }

    while (valid === needLen) {
      if (right - left < len) {
        start = left
        len = right - left
      }

      const d = s[left]
      left++

      if (need[d]) {
        if (window[d] === need[d]) {
          valid--
        }

        window[d] -= 1
      }
    }
  }

  return len === Number.MAX_SAFE_INTEGER ? '' : s.substr(start, len)
}
```
