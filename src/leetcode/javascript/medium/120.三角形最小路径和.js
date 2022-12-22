/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  const n = triangle.length
  const memo = new Array(n)
    .fill(Number.MAX_SAFE_INTEGER)
    .map(() => new Array(n).fill(Number.MAX_SAFE_INTEGER))

  const dfs = (i, j) => {
    if (i === n) return 0

    if (memo[i][j] !== Number.MAX_SAFE_INTEGER) return memo[i][j]

    return (memo[i][j] =
      Math.min(dfs(i + 1, j), dfs(i + 1, j + 1)) + triangle[i][j])
  }

  return dfs(0, 0)
}
// @lc code=end
