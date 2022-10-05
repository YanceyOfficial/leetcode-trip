---
id: 1109-corp-flight-bookings
title: 航班预订统计
sidebar_label: 1109. 航班预订统计
---

## 题目

这里有 n 个航班, 它们分别从 1 到 n 进行编号.

有一份航班预订表 bookings, 表中第 i 条预订记录 bookings[i] = [first<sub>i</sub>, last<sub>i</sub>, seats<sub>i</sub>] 意味着在从 first<sub>i</sub> 到 last<sub>i</sub> (包含 first<sub>i</sub> 和 last<sub>i</sub>) 的**每个航班**上预订了 seats<sub>i</sub> 个座位.

请你返回一个长度为 n 的数组 answer, 其中 answer[i] 是航班 i 上预订的座位总数.

:::info 示例

```ts
输入: bookings = [[1,2,10],[2,3,20],[2,5,25]], n = 5
输出: [10,55,45,25,25]
解释:
航班编号        1   2   3   4   5
预订记录 1:    10  10
预订记录 2:        20  20
预订记录 3:        25  25  25  25
总座位数:      10  55  45  25  25
因此, answer = [10,55,45,25,25]
```

:::

## 题解

该题为[差分数组](/algorithm-design/difference-array)的一个实际应用, 具体实现看那篇文章即可.

```ts
/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function (bookings, n) {
  const nums = new Array(n).fill(0)
  const da = new DiffArray(nums)

  for (const booking of bookings) {
    const [first, last, seats] = booking
    da.increment(first - 1, last - 1, seats)
  }

  return da.result()
}
```
