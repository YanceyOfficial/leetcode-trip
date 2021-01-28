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

输出: `[ [7], [2,2,3] ]`

---

输入: `candidates = [2,3,5], target = 8`

输出: `[ [2,2,2,2], [2,3,3], [3,5] ]`
:::

## 题解

![47-premute](../../static/img/47-premute.jpg)

遇到回溯算法, 先把决策树画出来, 我们能发现两条规律, 为了表示两个 1 代表不同的意义, 这里用 1<sub>a</sub> 和 1<sub>b</sub> 表示:

1. 如果在一条路径上, 一个相同的数字已经被选择过了, 那这条路径需要被废弃掉, 也就是上图**红色圆形**标注的部分. 比如最左边的 1<sub>a</sub> -> 1<sub>a</sub> 这条, 抑或是 1<sub>a</sub> -> 1<sub>b</sub> -> 1<sub>a</sub> 这条.

2. 在"同一层" 如果相邻的两个数字相同, 那它们生成的子树一定是相同的, 因此需要过滤掉一个, 也就是上图**红色三角形**标注的部分. 但要注意的是, **如果同一层一个值已经被用过了, 即便它右边的值与之相等, 右边这个值不会被过滤掉**, 比如第二层左侧的 1<sub>a</sub> -> 1<sub>b</sub> -> 2, 因为 1<sub>a</sub> 在第一条规则中已经被剪掉了, 1<sub>b</sub> 即便和 1<sub>a</sub> 相等, 也不会被剪掉.

:::caution
注意: 为保证相邻两个可以正常比较, 需要先对给定数组做一次排序.
:::

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
      if (sum < target) {
        track.push(candidates[i])
        backtrack(i, track, sum + candidates[i])
        track.pop()
      }
    }
  }

  backtrack(0, [], 0)
  return res
}
```
