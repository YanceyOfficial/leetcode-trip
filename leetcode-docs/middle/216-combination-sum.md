---
id: 216-combination-sum
title: 组合总数 III
sidebar_label: 216. 组合总数 III
keywords:
  - backtrack
---

## 题目

找出所有相加之和为 n 的 k 个数的组合. 组合中只允许含有 1 - 9 的正整数, 并且每种组合中不存在重复的数字.

说明:

- 所有数字都是正整数
- 解集不能包含重复的组合

:::info 示例

输入: `k = 3, n = 7`

输出: `[ [1,2,4] ]`

---

输入: `k = 3, n = 9`

输出: `[ [1,2,6], [1,3,5], [2,3,4] ]`
:::

## 题解

好了我已经吐了, 这个题其实是 [39. 组合数字](./39-combination-sum.md) 和 [47. 全排列 II](./47-permute.md) 的综合体.

- `candidates 中的每个数字在每个组合中只能使用一次`: 其实就对标第 47 题, 即使用 **同层相邻不能相等** 和 **used 数组** 的剪枝策略.

- `解集不能包含重复的组合`: 其实就对标第 39 题, 通过 `begin` 来限制下一次选择的起点, 是基于本次的选择, 这样下一次就不会选到本次选择的同层左边的数.

```js
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const res = []
  const used = new Array(k).fill(false)

  const backtrack = (begin, track, sum) => {
    if (track.length === k && sum === n) {
      res.push(track.slice())
      return
    }

    // 使用 begin 来限制下一次选择的起点, 是基于本次的选择, 这样下一次就不会选到本次选择的同层左边的数.
    for (let i = begin; i < 10; i++) {
      // 同层相邻两个数不能相等, 当然要保证 i - 1 不越界, 且 i - 1 没被用过
      if (i - 1 === i && i - 1 >= 0 && !used[i - 1]) {
        continue
      }

      // 如果这个数被用过, 跳过
      if (used[i]) {
        continue
      }
      if (sum < n) {
        track.push(i)
        used[i] = true
        backtrack(i, track, sum + i)
        track.pop()
        used[i] = false
      }
    }
  }

  backtrack(1, [], 0)

  return res
}
```
