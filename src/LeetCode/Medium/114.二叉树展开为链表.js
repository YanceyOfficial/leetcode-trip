/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
var flatten = function (root) {
  if (!root) return root

  flatten(root.left)
  flatten(root.right)

  // 1. 后序遍历: 左右子树已经被拉平成一条链表
  const left = root.left
  const right = root.right

  // 2. 将左子树作为右子树
  root.left = null
  root.right = left

  // 3. 将原先的右子树接到当前右子树的末端
  let p = root
  while (p.right !== null) {
    p = p.right
  }
  p.right = right
}
// @lc code=end
