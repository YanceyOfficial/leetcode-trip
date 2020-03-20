/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层次遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return [[]]

  const arr = [[]],
    queue = []

  let i = 0

  queue.push(root)
  arr[i] = [...arr[i], root.val]

  while (queue.length !== 0) {
    const currNode = queue.shift()

    if (currNode === queue[queue.length - 1]) {
      arr.push([])
      i++
    }

    if (currNode.left) {
      queue.push(currNode.left)
      arr[i] = [...arr[i], currNode.left.val]
    }

    if (currNode.right) {
      queue.push(currNode.right)
      arr[i] = [...arr[i], currNode.right.val]
    }
  }

  return arr
}
// @lc code=end

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

const tree = new TreeNode(1)
tree.left = new TreeNode(2)
tree.right = new TreeNode(3)
tree.left.left = new TreeNode(4)
tree.left.right = new TreeNode(5)
tree.right.right = new TreeNode(6)

console.log(levelOrder(tree))
