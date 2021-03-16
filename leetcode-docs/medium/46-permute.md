---
id: 46-permute
title: 全排列
sidebar_label: 46. 全排列
keywords:
  - backtrack
---

## 题目

给定一个 `没有重复` 数字的序列, 返回其所有可能的全排列.

:::info 示例
输入: `[1,2,3]`

输出:
`[ [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1] ]`
:::

## 题解

![backtrack](../../static/img/backtrack.jpg)

本题为经典的[回溯算法](/algorithm-design/backtrack/backtrack), 回溯算法的本质是遍历一颗决策树, 遍历过程中我们肯定会以一定的顺序, 比如先找 1, 再找 2, 最后只能找 3, 此时这这分支找完了, 就会退到上一层, 然后是 3, 最后只能找 2...

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let n = nums.length
  let res = []
  let track = []
  let backtrack = (track) => {
    if (track.length === n) {
      res.push(track)
      return
    }
    for (let i = 0; i < n; i++) {
      if (!track.includes(nums[i])) {
        track.push(nums[i])
        backtrack(track.slice())
        track.pop()
      }
    }
  }

  backtrack(track)
  return res
}
```
