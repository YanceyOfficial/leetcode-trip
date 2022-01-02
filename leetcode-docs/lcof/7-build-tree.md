---
id: 7-build-tree
title: 重建二叉树
sidebar_label: 7. 重建二叉树
---

## 题目

输入某二叉树的前序遍历和中序遍历的结果, 请构建该二叉树并返回其根节点. 假设输入的前序遍历和中序遍历的结果中都不含重复的数字.

:::info 示例

```ts
   3
  / \
 9  20
    / \
   15  7
```

输入: preorder = [3, 9, 20, 15, 7], inorder = [9, 3, 15, 20, 7]

输出: [3, 9, 20, null, null, 15, 7]

:::

:::info
本题和 [240. 搜索二维矩阵-ii](/leetcode/medium/240-search-matrix) 是同一题.
:::

## 题解

```ts
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) return null

  // 前序遍历的第一个元素是根节点
  const rootVal = preorder[0]

  // 根据中序遍历的左子树长度, 找到前序遍历的左子树和右子树
  const inorderDivider = inorder.indexOf(rootVal)
  const inorderLefts = inorder.slice(0, inorderDivider)
  const inorderRights = inorder.slice(inorderDivider + 1)

  // 根据前序遍历的根节点, 找到中序遍历的左子树和右子树
  const preorderDivider = inorderLefts.length + 1
  const preorderLefts = preorder.slice(1, preorderDivider)
  const preorderRights = preorder.slice(preorderDivider)

  const root = new TreeNode(rootVal)

  root.left = buildTree(preorderLefts, inorderLefts)
  root.right = buildTree(preorderRights, inorderRights)

  return root
}
```
