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
  if (!root) return 0
  return dfs(root, root.val)
}

var dfs = function (root, sum) {
  if (!root.left && !root.right) return sum

  const left = !root.left ? 0 : dfs(root.left, sum * 10 + root.left.val)
  const right = !root.right ? 0 : dfs(root.right, sum * 10 + root.right.val)
  return left + right
}
// @lc code=end
