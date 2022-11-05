/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
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
var findBottomLeftValue = function (root) {
  let maxDepth = 0
  let res = 0

  const dfs = (root, depth) => {
    if (!root) return

    if (depth > maxDepth) {
      maxDepth = depth
      res = root.val
    }

    dfs(root.left, depth + 1)
    dfs(root.right, depth + 1)
  }

  dfs(root, 1)
  return res
}
// @lc code=end
