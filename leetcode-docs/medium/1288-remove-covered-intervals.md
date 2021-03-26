---
id: 1288-remove-covered-intervals
title: 删除被覆盖区间
sidebar_label: 1288. 删除被覆盖区间
---

## 题目

给你一个区间列表, 请你删除列表中被其他区间所覆盖的区间, 在完成所有删除操作后, 请你返回列表中剩余区间的数目.

:::info 示例

输入: intervals = [[1,4],[3,6],[2,8]]

输出: 2

解释: 区间 [3,6] 被区间 [2,8] 覆盖, 所以它被删除了
:::

## 题解

1. 首先根据**区间起点进行升序排序**, 如果两个区间起点相等, 那么按**区间终点降序排序**
2. 让左指针指向第一个数组的起点区间元素, 让右指针指向第一个数组的终点区间元素
3. 如果 `left` 小于等于 `item` 的起点元素, `right` 大于等于 `item` 的终点元素, 说明被覆盖了, 如 `[2, 3]` 被 `[1, 4]` 包含了
4. 如果 `right` 大于等于 `item` 的起点元素, 并且 `right` 小于等于 `item` 的终点元素, 说明区间相交了, 如 `[1, 3]` 和 `[2, 4]`, 它俩可以合并成一个新区间 `[1, 4]`
5. 如果 `right` 都小于 `item[0]` 了, 说明两个区间完全不相交, 那么直接更新 `left` 和 `right` 到当前 `item`

```ts
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function (intervals) {
  // 首先根据区间起点进行升序排序
  // 如果两个区间起点相等, 那么按区间终点降序排序
  intervals.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1]
    }
    return a[0] - b[0]
  })

  let left = intervals[0][0]
  let right = intervals[0][1]

  let res = 0

  for (let i = 1; i < intervals.length; i++) {
    const item = intervals[i]
    // 情况一, 找到覆盖区间
    if (left <= item[0] && right >= item[1]) {
      res++
    }
    // 情况二, 找到相交区间, 合并
    if (right >= item[0] && right <= item[1]) {
      right = item[1]
    }
    // 情况三, 完全不相交, 更新起点和终点
    if (right < item[0]) {
      left = item[0]
      right = item[1]
    }
  }

  return intervals.length - res
}
```
