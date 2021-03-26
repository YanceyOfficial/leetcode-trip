---
id: 56-merge
title: 合并区间
sidebar_label: 56. 合并区间
---

## 题目

以数组 intervals 表示若干个区间的集合, 其中单个区间为 intervals[i] = [start<sub>i</sub>, end<sub>i</sub>] . 请你合并所有重叠的区间, 并返回一个不重叠的区间数组, 该数组需恰好覆盖输入中的所有区间.

:::info 示例

```bash
输入: intervals = [[1, 3],  [2, 6],  [8, 10],  [15, 18]]
输出: [[1, 6], [8, 10], [15, 18]]
解释: 区间 [1, 3] 和 [2, 6] 重叠,  将它们合并为 [1, 6].
```

```bash
输入: intervals = [[1, 4], [4, 5]]
输出: [[1, 5]]
解释: 区间 [1, 4] 和 [4, 5] 可被视为重叠区间.
```

:::

## 题解

![56-merge](../../static/img/56-merge.gif)

1. 先根据每个开始区间从小到大排序
2. 如果 `curr[0] <= last[1]`, 也就是说这两个区间有交集; 至于 curr 完全为 last 的子集, 还是局部重叠, 就去看下 `Math.max(last[1], curr[1])`, 如果 `last[1]` 大, 说明 `curr` 完全为 `last` 的子集, `last[1]` 还是那个 `last[1]`, 否则将 `last[1]` 更新成 curr[1]
3. 否则的话就不是连续区间, 那就直接 `push` 到 `res` 即可

```ts
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const len = intervals.length
  const res = []
  if (len === 0) return res
  intervals.sort((a, b) => a[0] - b[0])
  res.push(intervals[0])

  for (let i = 1; i < len; i++) {
    const curr = intervals[i]
    const last = res[res.length - 1]

    if (curr[0] <= last[1]) {
      last[1] = Math.max(last[1], curr[1])
    } else {
      res.push(curr)
    }
  }

  return res
}
```
