/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
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
var sumNumbers = function (root) {
  if (root === null) return 0
  return dfs(root, root.val)
}

var dfs = function (root, num) {
  if (root.left === null && root.right === null) return num

  return (
    (root.left !== null ? dfs(root.left, num * 10 + root.left.val) : 0) +
    (root.right !== null ? dfs(root.right, num * 10 + root.right.val) : 0)
  )
}
// @lc code=end
