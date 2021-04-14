---
id: 105-build-tree
title: 从前序与中序遍历序列构造二叉树
sidebar_label: 105. 从前序与中序遍历序列构造二叉树
keywords:
  - Tree
---

:::success Tips
题目类型: Tree

相关题目:

- [106. 从后序与中序遍历序列构造二叉树](/leetcode/medium/106-build-tree)
:::

## 题目

根据一棵树的前序遍历与中序遍历构造二叉树, 注意**树中没有重复的元素**.

:::info 示例

输入: `preorder = [3, 9, 20, 15, 7], inorder = [9, 3, 15, 20, 7]`

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

### 递归法

这道题最重要的还是得清楚前序遍历和中序遍历的定义 (注: 蓝色背景代表根, 红色背景代表左, 绿色背景代表右):

前序遍历: 根 -> 左 -> 右. 在示例中: <span style={{background: 'blue'}}>3</span><span style={{background: 'red'}}> 9 </span><span style={{background: 'green'}}>20 15 7</span>

中序遍历: 左 -> 根 -> 右. 在示例中: <span style={{background: 'red'}}>9</span><span style={{background: 'blue'}}> 3 </span><span style={{background: 'green'}}>15 20 7</span>

由于前序遍历的第一个节点是**根节点**, 那么通过它, 就可以找到中序遍历的**左节点**数组和**右节点**数组; 假设中序遍历的**左节点**数组的长度为 `len`, 又因为前序遍历的第一个节点是**根节点**, 因此我们就能找到前序遍历的"分界点"为 `len + 1`. 剩下的, 递归就完了.

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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) return null

  const rootVal = preorder[0]

  // 根据前序遍历的根节点, 找到中序遍历的左子树和右子树
  const inorderDivider = inorder.indexOf(rootVal)
  const inorderLefts = inorder.slice(0, inorderDivider)
  const inorderRights = inorder.slice(inorderDivider + 1)

  // 根据中序遍历的左子树长度, 找到前序遍历的左子树和右子树
  const preorderDivider = inorderLefts.length + 1
  const preorderLefts = preorder.slice(1, preorderDivider)
  const preorderRights = preorder.slice(preorderDivider)

  const root = new TreeNode(rootVal)

  root.left = buildTree(preorderLefts, inorderLefts)
  root.right = buildTree(preorderRights, inorderRights)

  return root
}
```

### 迭代法

// TODO:
