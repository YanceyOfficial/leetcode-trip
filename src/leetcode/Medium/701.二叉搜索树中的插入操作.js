/*
 * @lc app=leetcode.cn id=701 lang=javascript
 *
 * [701] 二叉搜索树中的插入操作
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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  const node = new TreeNode(val)
  if (root === null) return node

  let curr = root

  // 如果 val 小于当前节点的 val, 说明得往左边插
  if (val < curr.val) {
    // 如果当前节点的左侧子节点已经被占了
    if (curr.left) {
      // 就递归呗
      curr = curr.left
      insertIntoBST(curr, val)
    } else {
      // 否则就直接把新节点插到这里
      curr.left = node
    }
    // 右侧同理
  } else {
    if (curr.right) {
      curr = curr.right
      insertIntoBST(curr, val)
    } else {
      curr.right = node
    }
  }

  return root
}
// @lc code=end
