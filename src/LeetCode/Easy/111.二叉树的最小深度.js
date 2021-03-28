/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (root === null) return 0

  const queue = []
  queue.push(root)
  let depth = 1

  while (queue.length !== 0) {
    const len = queue.length

    for (let i = 0; i < len; i++) {
      const curr = queue.shift()

      if (curr.left === null && curr.right === null) {
        return depth
      }

      if (curr.left !== null) {
        queue.push(curr.left)
      }

      if (curr.right !== null) {
        queue.push(curr.right)
      }
    }
    depth++
  }
  return depth
}
// @lc code=end
