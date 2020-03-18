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
var maxDepth = function(root) {
  if (!root) return 0

  let count = 0
  const queue = []

  queue.push(root)

  while (queue.length !== 0) {
    if (queue.length === 1) {
      count++
    }
    
    const node = queue.shift()

    if (node.left !== null) {
      queue.push(node.left)
    }

    if (node.right !== null) {
      queue.push(node.right)
    }

    if (node.left !== null || node.right !== null) {
      count++
    }
  }

  return count
}
// @lc code=end
