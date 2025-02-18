/*
 * @lc app=leetcode.cn id=210 lang=javascript
 *
 * [210] 课程表 II
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const result = []

  const adj = new Array(numCourses).fill(null).map(() => [])
  for (const [course, pre] of prerequisites) {
    adj[pre].push(course)
  }

  const visited = new Array(numCourses).fill(0)

  const dfs = (u) => {
    if (visited[u] === 1) return false // 存在环
    if (visited[u] === 2) return true // 已完成访问

    visited[u] = 1 // 标记为正在访问
    for (const v of adj[u]) {
      if (!dfs(v)) return false
    }
    visited[u] = 2 // 标记为已完成访问
    result.push(u)
    return true
  }

  for (let i = 0; i < numCourses; i++) {
    if (!visited[i] && !dfs(i)) {
      return []
    }
  }

  return result
}
// @lc code=end
