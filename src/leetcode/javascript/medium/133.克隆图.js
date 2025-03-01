/*
 * @lc app=leetcode.cn id=133 lang=javascript
 *
 * [133] 克隆图
 */

// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
  if (!node) {
    return null
  }

  const visited = new Map()

  function dfs(curr) {
    if (!curr) {
      return null
    }

    if (visited.has(curr)) {
      return visited.get(curr)
    }

    const copyNode = { val: curr.val, neighbors: [] }
    visited.set(curr, copyNode)

    for (const neighbor of curr.neighbors) {
      copyNode.neighbors.push(dfs(neighbor))
    }

    return copyNode
  }

  return dfs(node)
}
// @lc code=end
