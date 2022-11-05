/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  let ans = 0

  var dfs1 = function (root) {
    if (!root) return

    dfs2(root, root.val)
    dfs1(root.left)
    dfs1(root.right)
  }

  var dfs2 = function (root, val) {
    if (val === targetSum) ans++

    if (root.left) dfs2(root.left, val + root.left.val)
    if (root.right) dfs2(root.right, val + root.right.val)
  }

  dfs1(root)
  return ans
}
// @lc code=end
