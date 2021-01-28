---
id: 39-combination-sum
title: 组合总数
sidebar_label: 39. 组合总数
keywords:
  - backtrack
---

## 题目

给定一个**无重复元素**的数组 candidates 和一个目标数 target, 找出 candidates 中所有可以使数字和为 target 的组合. candidates 中的数字可以无限制重复被选取.

说明:

- 所有数字(包括 target)都是正整数
- 解集不能包含重复的组合

:::note 示例

输入: `candidates = [2,3,6,7], target = 7`

输出: `[ [7], [2, 2, 3] ]`

---

输入: `candidates = [2, 3, 5], target = 8`

输出: `[ [2, 2, 2, 2], [2, 3, 3], [3, 5] ]`
:::

## 题解

![39-combination-sum](../../static/img/39-combination-sum.png)

获取**数字和为 target 的组合**并不难, 即在每次递归探索时将已选列表的值累加, 然后将 `sum === target` 作为回溯的结束条件即可. 但是这样会导致组合重复, 比如 `[2, 5]` 和 `[5, 2]` 都会被输出.

因此我们需要对重复的部分进行剪枝, 只要限制下一次选择的起点, 是基于本次的选择, 这样下一次就不会选到本次选择的同层左边的数.
**即通过控制 for 遍历的起点, 去掉会产生重复组合的选项**.

```js
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const len = candidates.length
  const res = []

  const backtrack = (begin, track, sum) => {
    if (target === sum) {
      res.push(track.slice())
      return
    }

    for (let i = begin; i < len; i++) {
      // 从 begin 开始选择
      if (sum < target) {
        track.push(candidates[i])
        backtrack(i, track, sum + candidates[i]) // 基于当前这个数的继续选择, 传 i, 下一次就不会选到 i 左边的数
        track.pop() // 撤销选择, 回到选择 candidates[i] 之前的状态, 继续尝试选同层右边的数
      }
    }
  }

  backtrack(0, [], 0)
  return res
}
```
