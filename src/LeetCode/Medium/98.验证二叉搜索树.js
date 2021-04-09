/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function (root) {
  return isValid(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
}
var isValid = function (root, min, max) {
  if (root === null) {
    return true
  }
  const mid = root.val
  if (!(mid > min && mid < max)) {
    return false
  }
  return isValid(root.left, min, mid) && isValid(root.right, mid, max)
}

// @lc code=end
