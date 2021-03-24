---
id: 424-character-replacement
title: 替换后的最长重复字符
sidebar_label: 424. 替换后的最长重复字符
keywords:
  - Sliding Window
---

:::success Tips
题目类型: 滑动窗口
:::

## 题目

给定一个**只包含大写字母**的字符串 s 和一个数字 k, 你可以将任意位置上的字符替换成另外的字符, 总共可最多替换 k 次, 找出该字符串最长的重复子串.

:::info 示例

输入: s = "AABABBA", k = 1

输出: 4

解释: 第三个字符 B 可以被替换为 A, 此时最大重复子串为 AAAA, 即最大长度为 4
:::

## 题解

![424-character-replacement](../../static/img/424-character-replacement.gif)

1. 将 right 对应的字符加入到 hashmap 中, 并计算出最新的 max 值
2. 如果 k + max 大于窗口, 说明窗口还可以更长, 即 right++
3. 如果 k + max 小于窗口, 说明当前能构成的最长的重复字母长度已经最大了，这时应该将 start++, 来寻找新的可能的更长重复子串

```ts
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let left = 0
  let right = 0

  const map = {}

  let max = 0
  let res = 0

  while (right < s.length) {
    const c = s[right]
    map[c] ? (map[c] += 1) : (map[c] = 1)
    max = Math.max(max, map[c])
    right++

    while (k + max < right - left) {
      const d = s[left]
      map[d] -= 1
      left++
    }

    res = Math.max(res, right - left)
  }

  return res
}
```
