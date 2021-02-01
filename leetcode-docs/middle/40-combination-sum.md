---
id: 40-combination-sum
title: 组合总数 II
sidebar_label: 40. 组合总数 II
keywords:
  - backtrack
---

## 题目

给定一个**有重复元素**的数组 candidates 和一个目标数 target, 找出 candidates 中所有可以使数字和为 target 的组合. **candidates 中的每个数字在每个组合中只能使用一次**.

说明:

- 所有数字(包括 target)都是正整数
- 解集不能包含重复的组合

:::note 示例

输入: `candidates = [10,1,2,7,6,1,5], target = 8`

输出: `[ [1, 7], [1, 2, 5], [2, 6], [1, 1, 6] ]`

---

输入: `candidates = [2,5,2,1,2], target = 5`

输出: `[ [1,2,2], [5] ]`
:::

## 题解

这个题其实是 [39. 组合数字](./39-combination-sum.md) 和 [47. 全排列 II](./47-permute.md) 的综合体.

- `candidates 中的每个数字在每个组合中只能使用一次`: 其实就对标第 47 题, 即使用 **同层相邻不能相等** 和 **used 数组** 的剪枝策略.

- `解集不能包含重复的组合`: 其实就对标第 39 题, 通过 `begin` 来限制下一次选择的起点, 是基于本次的选择, 这样下一次就不会选到本次选择的同层左边的数.

```js
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const len = candidates.length
  const res = []
  const used = new Array(len).fill(false)
  candidates.sort((a, b) => a - b)

  const backtrack = (begin, track, sum) => {
    if (sum === target) {
      res.push(track.slice())
      return
    }

    // 使用 begin 来限制下一次选择的起点, 是基于本次的选择, 这样下一次就不会选到本次选择的同层左边的数.
    for (let i = begin; i < len; i++) {
      // 同层相邻两个数不能相等, 当然要保证 i - 1 不越界, 且 i - 1 没被用过
      if (candidates[i - 1] === candidates[i] && i - 1 >= 0 && !used[i - 1]) {
        continue
      }

      // 如果这个数被用过, 跳过
      if (used[i]) {
        continue
      }

      if (sum < target) {
        track.push(candidates[i])
        used[i] = true
        backtrack(i, track, sum + candidates[i])
        track.pop()
        used[i] = false
      }
    }
  }

  backtrack(0, [], 0)

  return res
}
```
