---
id: 98-is-valid-bst
title: 验证二叉搜索树
sidebar_label: 98. 验证二叉搜索树
---

## 题目

验证一棵树是否为二叉搜索树. 本题中 BST 的特征如下:

- 节点的左子树只包含小于当前节点的数
- 节点的右子树只包含大于当前节点的数
- 所有左子树和右子树自身必须也是二叉搜索树

:::info 示例

输入:

```ts
  2
 / \
1   3
```

输出: true
:::

## 题解

### 方法一: 中序遍历

因为 BST 的中序遍历是有序的, 所以只要保证**当前节点的值大于前一个节点的值**即可. 因此可以先创建一个 prevNode 节点初始为 null, 走中序遍历即可.

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
 * @return {boolean}
 */
var isValidBST = function (root) {
  // 初始化前节点, 当然你直接初始化前节点的值也 ok
  let prev = null

  var inOrderTraverse = function (root) {
    if (root === null) return true

    // 判断左子树
    if (!inOrderTraverse(root.left)) return false

    // 如果当前值小于等于了前一个节点的值, 说明不是一棵 BST
    if (prev !== null && root.val <= prev.val) return false

    // 将当前节点赋给前一个节点
    prev = root

    // 判断右子树
    if (!inOrderTraverse(root.right)) return false

    return true
  }

  return inOrderTraverse(root)
}
```

### 方法二

根据 BST 的定义, 左子树的值要在 `(min, mid)` 之间, 右子树的值在 `(mid, max)` 之间.

```ts
var isValidBST = function (root) {
  return isValid(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
}
var isValid = function (root, min, max) {
  if (root === null) {
    return true
  }
  const mid = root.val
  // mid 不在 min 和 max 之间时, 一定不是 BST
  if (!(mid > min && mid < max)) {
    return false
  }
  return isValid(root.left, min, mid) && isValid(root.right, mid, max)
}
```
