---
id: 22-genertate-parenthesis
title: 括号生成
sidebar_label: 22. 括号生成
---

## 题目

给出 n 代表生成括号的对数, 请你写出一个函数, 使其能够生成所有可能的并且有效的括号组合.

:::info 示例

输入：3

输出：[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
:::

## 题解

```ts
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const res = []
  let track = []

  let backtrack = (left, right, track) => {
    if (right < left) return // 因为每个 track 的子串, 都要保证 left >= right, 即 [剩下的 left] < [剩下的 right], 一定不符合
    if (left < 0 || right < 0) return // 假设 left 小于 0 了, 意味着 left 的数量大于 n 了, 一定不符合
    if (left === 0 && right === 0) {
      // 当两边括号都恰好为 0 了, 证明是一个合法的括号生成
      res.push(track.join(''))
      return
    }

    track.push('(')
    backtrack(left - 1, right, track)
    track.pop()

    track.push(')')
    backtrack(left, right - 1, track)
    track.pop()
  }

  backtrack(n, n, track)

  return res
}
```
