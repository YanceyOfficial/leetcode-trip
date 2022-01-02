---
id: 973-k-closest
title: 最接近原点的-k-个点
sidebar_label: 973. 最接近原点的-k-个点
---

## 题目

我们有一个由平面上的点组成的列表 `points`. 需要从中找出 `K` 个距离原点 `(0, 0)` 最近的点. (这里, 平面上两点之间的距离是欧几里德距离). 你可以按任何顺序返回答案. 除了点坐标的顺序之外, 答案确保是唯一的.

:::info 示例

```ts
输入: points = [[1,3],[-2,2]], K = 1
输出: [[-2,2]]
解释:
(1, 3) 和原点之间的距离为 sqrt(10),
(-2, 2) 和原点之间的距离为 sqrt(8),
由于 sqrt(8) < sqrt(10), (-2, 2) 离原点更近.
我们只需要距离原点最近的 K = 1 个点, 所以答案就是 [[-2,2]].
```

```ts
输入: points = [[3,3],[5,-1],[-2,4]], K = 2
输出: [[3,3],[-2,4]]
(答案 [[-2,4],[3,3]] 也会被接受.)
```

:::

## 题解

我就比较菜了, 先计算每个元素的欧几里德距离, push 到一个数组里, 然后给这个数组排序, 取前 k 个.

```ts
/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  const len = points.length
  const arr = []
  for (let i = 0; i < len; i++) {
    const [x, y] = points[i]
    const sum = Math.pow(x, 2) + Math.pow(y, 2)
    arr.push({ sum, item: points[i] })
  }

  arr.sort((a, b) => a.sum - b.sum)

  return arr.slice(0, k).map((val) => val.item)
}
```

## 附录

🐎 一下, 这个题可以用 topK 的算法, 也就是借助最大堆或者最小堆, 这玩意儿一般用优先队列实现, 但 js 没这方法, 先 🐎 一下.
