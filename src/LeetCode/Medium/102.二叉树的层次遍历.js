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
var levelOrder = function (root) {
  const levels = []
  if (!root) return levels

  const queue = [root]

  while (queue.length !== 0) {
    const currLevelLength = queue.length
    const temp = []

    for (let i = 0; i < currLevelLength; i++) {
      const node = queue.shift()
      temp.push(node.val)

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    levels.push(temp)
  }

  return levels
}
// @lc code=end
