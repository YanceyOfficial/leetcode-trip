/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
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
    return true
  }

  for (let i = 0; i < numCourses; i++) {
    if (!visited[i] && !dfs(i)) {
      return false
    }
  }

  return true
}
// @lc code=end
