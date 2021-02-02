---
id: 77-combine
title: 组合
sidebar_label: 77. 组合
keywords:
  - backtrack
---

## 题目

给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。

:::note 示例

输入: `n = 3, k = 2`

输出: `[ [2,4], [3,4], [2,3], [1,2], [1,3], [1,4] ]`
:::

## 题解

好了我已经吐了, 这个题其实是 [40. 组合总和 II](./40-combination-sum.md) 的变体. 翻译过来就是: 候选项为 [1, n], 每个组合有 k 个数, 每个数字只能选一次, 且组合不能重复.

```js
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const res = []
  const used = new Array(k).fill(false)

  const backtrack = (begin, track) => {
    if (track.length === k) {
      res.push(track.slice())
      return
    }

    for (let i = begin; i <= n; i++) {
      if (i - 1 === i && i - 1 >= 1 && !used[i - 1]) {
        continue
      }

      if (used[i]) {
        continue
      }

      track.push(i)
      used[i] = true
      backtrack(i, track)
      track.pop()
      used[i] = false
    }
  }

  backtrack(1, [])

  return res
}
```
