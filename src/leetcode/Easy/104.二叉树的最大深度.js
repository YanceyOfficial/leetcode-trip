/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (root === null) return 0

  const queue = []
  queue.push(root)
  let depth = 0

  while (queue.length !== 0) {
    const len = queue.length

    for (let i = 0; i < len; i++) {
      const curr = queue.shift()

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
