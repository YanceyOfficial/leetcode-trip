---
id: 106-build-tree
title: 从中序与后序遍历序列构造二叉树
sidebar_label: 106. 从中序与后序遍历序列构造二叉树
keywords:
  - Tree
---

:::success Tips
题目类型: Tree

相关题目: [105. 从前序与中序遍历序列构造二叉树](/leetcode/medium/105-build-tree)
:::

## 题目

根据一棵树的后序遍历与中序遍历构造二叉树, 注意**树中没有重复的元素**.

:::info 示例

输入: `postorder = [9, 15, 7, 20, 3], inorder = [9, 3, 15, 20, 7]`

输出:

```ts
  3
 / \
9  20
  /  \
 15   7
```

:::

## 题解

本题为[105. 从前序与中序遍历序列构造二叉树](/leetcode/medium/105-build-tree)的姊妹题, 题解看那篇即可, 最重要的是要了解三种遍历方式的含义.

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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (inorder.length === 0 || postorder.length === 0) return null

  const rootVal = postorder[postorder.length - 1]

  const inorderDivider = inorder.indexOf(rootVal)
  const inorderLefts = inorder.slice(0, inorderDivider)
  const inorderRights = inorder.slice(inorderDivider + 1)

  const postorderDivider = inorderLefts.length
  const postorderLefts = postorder.slice(0, postorderDivider)
  const postorderRights = postorder.slice(postorderDivider, -1)

  const root = new TreeNode(rootVal)

  root.left = buildTree(inorderLefts, postorderLefts)
  root.right = buildTree(inorderRights, postorderRights)

  return root
}
```
