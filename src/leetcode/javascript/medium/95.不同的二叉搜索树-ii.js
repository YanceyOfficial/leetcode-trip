/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
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
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  var dfs = function (l, r) {
    if (l > r) return [null]
    const res = []

    for (let i = l; i <= r; i++) {
      for (const x of dfs(l, i - 1)) {
        for (const y of dfs(i + 1, r)) {
          const root = new TreeNode(i)
          root.left = x
          root.right = y
          res.push(root)
        }
      }
    }

    return res
  }

  return dfs(1, n)
}

// @lc code=end
