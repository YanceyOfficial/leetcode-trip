---
id: 112-has-path-sum
title: 路径总和
sidebar_label: 112. 路径总和
keywords:
  - Tree
---

:::success Tips
题目类型: Tree

相关题目:

- [113. 路径总和-ii](/leetcode/medium/113-path-sum)

:::

## 题目

给定一个二叉树和一个目标和, 判断该树中是否存在**根节点到叶子节点**的路径, 这条路径上所有节点值相加等于目标和.

:::info 示例

输入: root = 如下, targetSum = 22

```ts
      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
```

输出: true, 因为存在目标和为 22 的根节点到叶子节点的路径 `5 -> 4 -> 11 -> 2`
:::

## 题解

写个先序排序, 递归结束条件是如果 root 的左右为 null(即到了叶子节点), 并且 `root.val === targetSum`, 便可返回 true, 不管是往左走的还是往右走的.

```ts
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
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (root === null) return

  // 到了叶子结点了, 且值等于 targetSum
  if (!root.left && !root.right && root.val === targetSum) {
    return true
  }

  const left = hasPathSum(root.left, targetSum - root.val)
  const right = hasPathSum(root.right, targetSum - root.val)
  return left || right
}
```
