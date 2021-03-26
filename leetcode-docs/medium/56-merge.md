---
id: 56-merge
title: 合并区间
sidebar_label: 56. 合并区间
---

## 题目

以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。

:::info 示例

```bash
输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
输出：[[1,6],[8,10],[15,18]]
解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
```

```bash
输入：intervals = [[1,4],[4,5]]
输出：[[1,5]]
解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。
```

:::

## 题解

[一文秒杀所有区间相关问题](https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247487316&idx=1&sn=95cfbbd24f1cb5d8c07c71c2ba15246a&chksm=9bd7f15caca0784ab7bce7f36a6eb9118de2a573515a99948168ed93b25069a3b7bf85cf50a5&scene=21#wechat_redirect)

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
