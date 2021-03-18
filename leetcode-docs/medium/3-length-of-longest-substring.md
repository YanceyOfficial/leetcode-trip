---
id: 3-length-of-longest-substring
title: 无重复字符的最长子串
sidebar_label: 3. 无重复字符的最长子串
---

## 题目

给定一个字符串, 找出其中不含有重复字符的**最长子串**的长度.

:::info 示例

```ts
输入: s = "bacabcbb"

输出: 3

解释: 因为无重复字符的最长子串是 "abc", 所以其长度为 3.
```

```ts
输入: s = "pwwkew"

输出: 3

解释: 因为无重复字符的最长子串是 "wke", 所以其长度为 3.
```

:::

## 题解

import Carousel from 'nuka-carousel';

<Carousel style={{margin: '48px 0'}}>
<img src="../../static/img/33-search.png"/>
<img src="../../static/img/39-combination-sum.png"/>
</Carousel>

```ts
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const map = {}
  let start = 0
  let end = 0
  let res = 0

  while (end < s.length) {
    const endVal = s[end]
    end++

    if (map[endVal]) {
      map[endVal] += 1
    } else {
      map[endVal] = 1
    }

    while (map[endVal] > 1) {
      const startVal = s[start]
      start++
      map[startVal] -= 1
    }

    res = Math.max(res, end - start)
  }

  return res
}
```
