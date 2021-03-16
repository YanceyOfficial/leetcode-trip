---
id: 60-get-permutation
title: 排列序列
sidebar_label: 60. 排列序列
---

## 题目

这里是题目这里是题目这里是题目这里是题目这里是题目

:::info 示例

输入:

输出:
:::

## 题解

这里是题解这里是题解这里是题解这里是题解这里是题解

```ts

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  let res = ''
  let count = 0

  const backtrack = (track) => {
    if (track.length === n) {
      count += 1
      if (count === k) {
        res = track.slice().join('')
        return
      }
    }

    for (let i = 1; i <= n; i++) {
      if (!track.includes(i)) {
        track.push(i)
        backtrack(track)
        track.pop()
      }
    }
  }

  backtrack([])

  return res
}

```
