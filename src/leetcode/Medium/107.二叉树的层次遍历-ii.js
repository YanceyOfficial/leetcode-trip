/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
var levelOrderBottom = function (root) {
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

    levels.unshift(temp)
  }

  return levels
}
// @lc code=end
