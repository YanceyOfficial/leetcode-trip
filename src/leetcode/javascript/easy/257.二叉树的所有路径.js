/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {pathing[]}
 */
var binaryTreePaths = function (root) {
  const paths = []

  var dfs = function (root, path) {
    if (root !== null) {
      path += root.val
      if (root.left === null && root.right === null) {
        paths.push(path)
      } else {
        path += '->'
        dfs(root.left, path)
        dfs(root.right, path)
      }
    }
  }

  dfs(root, '')

  return paths
}

// @lc code=end
