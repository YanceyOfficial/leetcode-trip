---
id: 438-find-anagrams
title: 找到字符串中所有字母异位词
sidebar_label: 438. 找到字符串中所有字母异位词
keywords:
  - Sliding Window
---

:::success Tips
题目类型: 滑动窗口
:::

## 题目

给定一个字符串 s 和一个非空字符串 p, 找到 s 中所有是 p 的字母异位词的子串, 返回这些子串的起始索引. 字符串只包含小写英文字母, 并且字符串 s 和 p 的长度都不超过 20100.

说明：

字母异位词指字母相同, 但排列不同的字符串.
不考虑答案输出的顺序.

:::info 示例

```bash
输入: s = "cbaebabacd" p = "abc"

输出: [0, 6]

解释:

起始索引等于 0 的子串是 "cba", 它是 "abc" 的字母异位词.
起始索引等于 6 的子串是 "bac", 它是 "abc" 的字母异位词.
```

```bash
输入: s = "abab" p=  "ab"

输出: [0, 1, 2]

解释:

起始索引等于 0 的子串是 "ab", 它是 "ab" 的字母异位词.
起始索引等于 1 的子串是 "ba", 它是 "ab" 的字母异位词.
起始索引等于 2 的子串是 "ab", 它是 "ab" 的字母异位词.
```

:::

## 题解

这里是题解这里是题解这里是题解这里是题解这里是题解

```js
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const need = {}
  const window = {}

  for (const i of p) {
    need[i] ? (need[i] += 1) : (need[i] = 1)
  }

  const needLen = Object.keys(need).length

  let left = 0
  let right = 0

  let valid = 0

  const res = []

  while (right < s.length) {
    const c = s[right]
    right++

    if (need[c]) {
      window[c] ? (window[c] += 1) : (window[c] = 1)

      if (window[c] === need[c]) {
        valid++
      }
    }

    while (right - left >= p.length) {
      if (valid === needLen) res.push(left)

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

  return res
}
```
