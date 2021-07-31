/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  return buildBST(nums, 0, nums.length - 1)
}

var buildBST = (nums, start, end) => {
  // 不可能出现 start > end
  if (start > end) return null

  const midIndex = (start + end) >>> 1 // 求中间索引
  const root = new TreeNode(nums[midIndex]) // 构建当前节点

  root.left = buildBST(nums, start, midIndex - 1) // 构建左子树
  root.right = buildBST(nums, midIndex + 1, end) // 构建右子树

  return root
}

// @lc code=end
