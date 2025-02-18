/*
 * @lc app=leetcode.cn id=399 lang=javascript
 *
 * [399] 除法求值
 */

// @lc code=start
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  const graph = new Map()

  // 构建图
  for (let i = 0; i < equations.length; i++) {
    const [a, b] = equations[i]
    const value = values[i]

    if (!graph.has(a)) {
      graph.set(a, new Map())
    }
    graph.get(a).set(b, value)

    if (!graph.has(b)) {
      graph.set(b, new Map())
    }
    graph.get(b).set(a, 1 / value)
  }

  const result = []

  // DFS
  function dfs(start, end, product) {
    if (!graph.has(start) || !graph.has(end)) {
      return -1.0
    }

    if (start === end) {
      return product
    }

    const visited = new Set()
    visited.add(start)

    const stack = [[start, product]]

    while (stack.length > 0) {
      const [curr, currProduct] = stack.pop()

      if (curr === end) {
        return currProduct
      }

      if (!graph.has(curr)) {
        continue
      }

      for (const [neighbor, weight] of graph.get(curr)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor)
          stack.push([neighbor, currProduct * weight])
        }
      }
    }

    return -1.0
  }

  // 处理查询
  for (const [c, d] of queries) {
    result.push(dfs(c, d, 1.0))
  }

  return result
}
// @lc code=end
