/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  if (root === null) return false
  if (root.left === null && root.right === null && root.val === sum) return true

  let left = hasPathSum(root.left, sum - root.val)
  let right = hasPathSum(root.right, sum - root.val)
  return left || right
}
// @lc code=end
