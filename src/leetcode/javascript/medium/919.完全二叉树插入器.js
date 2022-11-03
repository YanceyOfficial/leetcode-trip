/*
 * @lc app=leetcode.cn id=919 lang=javascript
 *
 * [919] 完全二叉树插入器
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
 */
var CBTInserter = function (root) {
  this.list = []
  this.idx = 0
  const queue = [root]

  while (queue.length !== 0) {
    const n = queue.length

    for (let i = 0; i < n; i++) {
      const node = queue.shift()
      this.list.push(node)

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }
}

/**
 * @param {number} val
 * @return {number}
 */
CBTInserter.prototype.insert = function (val) {
  const node = new TreeNode(val)
  while (
    this.list[this.idx].left !== null &&
    this.list[this.idx].right !== null
  ) {
    this.idx++
  }

  const father = this.list[this.idx]
  if (father.left === null) {
    father.left = node
  } else if (father.right == null) {
    father.right = node
  }

  this.list.push(node)
  return father.val
}

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function () {
  return this.list[0]
}

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(val)
 * var param_2 = obj.get_root()
 */
// @lc code=end
