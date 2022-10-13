/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  const visited = new Array(m)
  for (let i = 0; i < m; i++) {
    visited[i] = new Array(n).fill(false)
  }

  const sum = (a, b) => (a % 10) + ((a / 10) | 0) + (b % 10) + ((b / 10) | 0)

  const dfs = (i, j) => {
    if (i >= m || j >= n || sum(i, j) > k || visited[i][j]) return 0

    visited[i][j] = true

    return dfs(i + 1, j) + dfs(i, j + 1) + 1
  }

  return dfs(0, 0)
}
