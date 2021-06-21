---
id: 28-str-str
title: 实现-str-str
sidebar_label: 28. 实现-str-str
---

## 题目

给你两个字符串 haystack 和 needle, 请你在 haystack 字符串中找出 needle 字符串出现的第一个位置(下标从 0 开始). 如果不存在, 则返回 -1.

:::info 示例

输入: haystack = "hello", needle = "ll"

输出: needle = "ll"
:::

## 题解

类似于游标卡尺, 先找好 `needle` 的长度, 然后通过该区间在 `haystack` 上从左到右游走(`haystack.slice(i, j)`).

```ts
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle === '') return 0

  let i = 0,
    j = needle.length

  while (j <= haystack.length) {
    if (haystack.slice(i, j) === needle) {
      return i
    } else {
      i++
      j++
    }
  }

  return -1
}
```
