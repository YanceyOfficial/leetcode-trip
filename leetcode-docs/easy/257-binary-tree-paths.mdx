---
id: 257-binary-tree-paths
title: 二叉树的所有路径
sidebar_label: 257. 二叉树的所有路径
---

## 题目

给定一个二叉树, 返回所有从根节点到叶子节点的路径.

:::info 示例

输入:

```ts
   1
 /   \
2     3
 \
  5
```

输出: `['1->2->5', '1->3']`
:::

## 题解

本质是先序遍历, 先把当前值存到 path 中; 到了叶子结点, 这次路径就到头了, 将 path 推到 paths 中; 否则走递归.

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
 * @return {pathing[]}
 */
var binaryTreePaths = function (root) {
  const paths = []

  var dfs = function (root, path) {
    if (root !== null) {
      path += root.val
      if (root.left === null && root.right === null) {
        paths.push(path)
      } else {
        path += '->'
        dfs(root.left, path)
        dfs(root.right, path)
      }
    }
  }

  dfs(root, '')

  return paths
}
```
