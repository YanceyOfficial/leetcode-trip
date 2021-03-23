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

这是个很经典的滑动窗口问题, 滑动窗口的基本框架不太复杂, 这道题的难点在于**如何知道 window 已经覆盖了 t 字符串**.

1. 首先创建一个名叫 need 的 hashmap, 用于映射 t 的每个元素
2. 定义一个 valid 的变量, 初始化为 0, 当 `window[s[right]] === need[s[right]]` 时, 让 valid++
3. 因此当 `valid === need.size` 时, 就保证了 window 中已经覆盖了 t 字符串
4. 接着就可以缩小窗口了, 缩小窗口的代码跟扩大窗口的代码相反, 即直到窗口中的字符串不再符合要求, left 不再继续移动
5. 重复这个过程, 直到 right 到了最右边退出循环

```ts
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const need = {}
  const window = {}

  // 将 t 的每个元素映射到 hashmap 中
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
