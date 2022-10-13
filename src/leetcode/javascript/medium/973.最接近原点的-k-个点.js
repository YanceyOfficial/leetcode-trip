/*
 * @lc app=leetcode.cn id=973 lang=javascript
 *
 * [973] 最接近原点的 K 个点
 */

// @lc code=start
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
// @lc code=end
console.log(
  kClosest(
    [
      [3, 3],
      [5, -1],
      [-2, 4],
      [1, 1],
    ],
    2,
  ),
)
