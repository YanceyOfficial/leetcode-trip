/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  // 1. 设置结果集
  const res = []

  // 2. 深度优先搜索: root -> 树; track -> 路径; targetSum -> 剩余的总和
  const backtrack = (root, track, targetSum) => {
    // 2.1 终止条件
    if (!root) {
      return
    }

    // 2.2 路径添加当前元素
    track.push(root.val)

    // 2.3 如果没有左子树和右子树(叶子节点)
    if (!root.left && !root.right) {
      // 2.4 如果目标总数等于当前节点的值
      if (targetSum - root.val === 0) {
        res.push(track.slice())
      }
    } else {
      // 2.5 进一步递归左子树和右子树
      backtrack(root.left, track, targetSum - root.val)
      backtrack(root.right, track, targetSum - root.val)
    }

    // 2.6 回溯
    track.pop()
  }
  backtrack(root, [], targetSum)

  // 3. 返回结果
  return res
}
// @lc code=end

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const tree = new TreeNode(
  5,
  new TreeNode(
    4,
    new TreeNode(11, new TreeNode(7, null, null), new TreeNode(2, null, null)),
    null,
  ),
  new TreeNode(
    8,
    new TreeNode(13, null, null),
    new TreeNode(4, new TreeNode(5, null, null), new TreeNode(1, null, null)),
  ),
)

console.log(pathSum(tree, 22))
