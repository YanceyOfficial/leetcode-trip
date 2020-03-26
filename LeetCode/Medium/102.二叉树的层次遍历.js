/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层次遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const levels = []
  if (!root) return levels

  const queue = []
  queue.push(root)
  let level = 0

  while (queue.length !== 0) {
    levels.push([])
    const currLevelLength = queue.length

    for (let i = 0; i < currLevelLength; i++) {
      const node = queue.shift()
      levels[level].push(node.val)

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    level++
  }

  return levels
}
// @lc code=end
