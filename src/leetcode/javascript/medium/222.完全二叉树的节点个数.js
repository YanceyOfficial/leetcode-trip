/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
var countNodes = function (root) {
  let hLeft = 0,
    hRight = 0
  let pLeft = root,
    pRight = root

  while (pLeft) {
    ++hLeft
    pLeft = pLeft.left
  }
  while (pRight) {
    ++hRight
    pRight = pRight.right
  }

  // 如果最左线的高度等于最右线的高度, 证明是颗完美二叉树, 直接 2^n - 1 返回完活
  if (hLeft === hRight) return Math.pow(2, hLeft) - 1

  // 否则还是走递归那套
  return countNodes(root.left) + countNodes(root.right) + 1
}

// @lc code=end
