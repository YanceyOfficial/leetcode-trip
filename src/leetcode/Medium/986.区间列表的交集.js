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
    const a1 = firstList[i][0]
    const a2 = firstList[i][1]
    const b1 = secondList[j][0]
    const b2 = secondList[j][1]

    if (b2 >= a1 && a2 >= b1) {
      res.push([Math.max(a1, b1), Math.min(a2, b2)])
    }

    if (b2 < a2) {
      j += 1
    } else {
      i += 1
    }
  }

  return res
}
// @lc code=end
