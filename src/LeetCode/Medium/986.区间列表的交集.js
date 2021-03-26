/*
 * @lc app=leetcode.cn id=986 lang=javascript
 *
 * [986] 区间列表的交集
 */

// @lc code=start
/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
  const firstListLen = firstList.length
  const secondListLen = secondList.length
  let i = 0,
    j = 0
  const res = []

  while (i < firstListLen && j < secondListLen) {
    const a0 = firstList[i][0]
    const a1 = firstList[i][1]
    const b0 = secondList[j][0]
    const b1 = secondList[j][1]

    if (b1 >= a0 && a1 >= b0) {
      res.push([Math.max(a0, b0), Math.min(a1, b1)])
    }

    if (b1 < a1) {
      j += 1
    } else {
      i += 1
    }
  }

  return res
}
// @lc code=end
console.log(
  intervalIntersection(
    [
      [0, 2],
      [5, 10],
      [13, 23],
      [24, 25],
    ],
    [
      [1, 5],
      [8, 12],
      [15, 24],
      [25, 26],
    ],
  ),
)
