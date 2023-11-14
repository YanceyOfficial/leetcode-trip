/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  const list = []
  inOrder(root, list)
  let x = null
  let y = null

  for (let i = 0; i < list.length - 1; i++) {
    if (list[i].val > list[i + 1].val) {
      y = list[i + 1]
      if (!x) x = list[i]
    }
  }

  if (x && y) {
    const tmp = x.val
    x.val = y.val
    y.val = tmp
  }
}

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
 * @param {TreeNode[]} list
 * @return {void} Do not return anything, modify root in-place instead.
 */
var inOrder = function (root, list) {
  if (!root) return null

  inOrder(root.left, list)
  list.push(root)
  inOrder(root.right, list)
}
// @lc code=end
