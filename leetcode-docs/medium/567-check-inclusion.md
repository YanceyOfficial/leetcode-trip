---
id: 567-check-inclusion
title: 字符串的排列
sidebar_label: 567. 字符串的排列
keywords:
  - Sliding Window
---

:::success Tips
题目类型: 滑动窗口

相关题目:

- [3. 无重复字符的最长子串](/leetcode/medium/3-length-of-longest-substring)
- [76. 最小覆盖子串](/leetcode/hard/76-min-window)
- [209. 长度最小的子数组](/leetcode/medium/209-min-sub-array-len)
- [239. 滑动窗口最大值](/leetcode/hard/239-max-sliding-window)
- [424. 替换后的最长重复字符](/leetcode/medium/424-character-replacement)
- [438. 找到字符串中所有字母异位词](/leetcode/medium/438-find-anagrams)

:::

## 题目

给定两个字符串 s1 和 s2, 写一个函数来判断 s2 是否包含 s1 的排列; 换句话说, 第一个字符串的排列之一是第二个字符串的**子串**.

提示:

- 输入的字符串只包含小写字母
- 两个字符串的长度都在 [1, 10000] 之间

:::info 示例

```ts
输入: s1 = "ab" s2 = "eidbaooo"
输出: True
解释: s2 包含 s1 的排列之一 ("ba").
```

```ts
输入: s1= "ab" s2 = "eidboaoo"
输出: False

```

:::

## 题解

标准的滑动窗口问题, 写好模版即可, 该题的关键点是缩小窗口的时机是窗口区间长度大于等于 s1 的长度, 这样才有可能将 s1 包含在内, 即 `right - left >= s1.length`.

```ts
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const need = {}
  const window = {}

  // 将 s1 的每个元素映射到 hashmap 中
  for (const i of s1) {
    need[i] ? (need[i] += 1) : (need[i] = 1)
  }

  const needLen = Object.keys(need).length

  let left = 0,
    right = 0

  let valid = 0

  while (right < s2.length) {
    const c = s2[right]
    right++

    if (need[c]) {
      window[c] ? (window[c] += 1) : (window[c] = 1)

      if (window[c] === need[c]) {
        valid++
      }
    }

    // 缩小窗口的时机是窗口区间长度大于等于 s1 的长度, 这样才有可能将 s1 包含在内
    // 即 right - left >= s1.length
    while (right - left >= s1.length) {
      // 一旦 valid === needLen, 也就找到了子串, 此时直接返回 true 完活
      if (valid === needLen) return true

      const d = s2[left]
      left++

      if (need[d]) {
        if (window[d] === need[d]) {
          valid--
        }

        window[d] -= 1
      }
    }
  }

  return false
}
```
