/*
 * @lc app=leetcode.cn id=452 lang=javascript
 *
 * [452] 用最少数量的箭引爆气球
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  const n = points.length
  points.sort((a, b) => a[1] - b[1])

  let total = 1
  let smallestEnd = points[0][1]

  for (let i = 1; i < n; i++) {
    const [start, end] = points[i]
    if (start > smallestEnd) {
      smallestEnd = end
      total++
    }
  }

  return total
}
// @lc code=end

console.log(
  findMinArrowShots([
    [10, 16],
    [2, 8],
    [1, 6],
    [7, 12],
  ]),
)
console.log(
  findMinArrowShots([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
  ]),
)
console.log(
  findMinArrowShots([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
  ]),
)
console.log(findMinArrowShots([[1, 2]]))
console.log(
  findMinArrowShots([
    [2, 3],
    [2, 3],
  ]),
)
