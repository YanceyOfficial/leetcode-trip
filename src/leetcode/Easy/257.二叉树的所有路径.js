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
  dfs(root, '', paths)

  return paths
}

var dfs = function (root, path, paths) {
  if (root !== null) {
    path += root.val
    if (root.left === null && root.right === null) {
      paths.push(path)
    } else {
      path += '->'
      dfs(root.left, path, paths)
      dfs(root.right, path, paths)
    }
  }
}
// @lc code=end
