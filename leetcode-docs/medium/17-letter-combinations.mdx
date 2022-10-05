---
id: 17-letter-combinations
title: 电话号码的字母组合
sidebar_label: 17. 电话号码的字母组合
keywords:
  - backtrack
---

:::success Tips
题目类型: backtrack
:::

## 题目

给定一个仅包含数字 2-9 的字符串, 返回所有它能表示的字母组合. 答案可以按**任意顺序**返回. 给出数字到字母的映射如下(与电话按键相同). 注意 1 不对应任何字母.

:::info 示例
输入: digits = "23"

输出: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
:::

## 题解

```ts
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) return []

  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }

  const res = []
  const track = []
  const backtrack = (track) => {
    const len = track.length
    if (len === digits.length) {
      res.push(track.join(''))
      return
    }

    const digit = digits[len]
    const val = map[digit]
    for (let i = 0; i < val.length; i++) {
      track.push(val[i])
      backtrack(track.slice())
      track.pop()
    }
  }

  backtrack(track)
  return res
}
```
