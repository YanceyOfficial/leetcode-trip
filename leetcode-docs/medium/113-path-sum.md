---
id: 113-path-sum
title: 路径总和-ii
sidebar_label: 113. 路径总和-ii
keywords:
  - Tree
  - Backtrack
---

:::success Tips
题目类型: [Tree](/data-structure/tree/concept) | [Backtrack](/algorithm-design/backtrack)

相关题目:

- [112. 路径总和](/leetcode/easy/112-has-path-sum)
:::

## 题目

给你二叉树的根节点 root 和一个整数目标和 targetSum, 找出所有**从根节点到叶子节点**路径总和等于给定目标和的路径.

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

输出: `[[5,4,11,2],[5,8,4,5]]`
:::

## 题解

### 方法一: 深度优先遍历

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
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  const res = []
  dfs(root, targetSum, [], res)
  return res
}

function dfs(root, targetSum, arr, res) {
  if (root === null) return null

  // 因为 arr 是按引用传递的, 为防止分支污染
  // 就需要每次重新建一个新的数组
  const _arr = [...arr, root.val]
  if (root.left === null && root.right === null && root.val === targetSum) {
    res.push(_arr)

    // 到叶子节点之后直接返回
    return
  }

  dfs(root.left, targetSum - root.val, _arr, res)
  dfs(root.right, targetSum - root.val, _arr, res)
}
```

### 方法二: 回溯

```ts
var pathSum = function (root, targetSum) {
  // 1. 设置结果集
  const result = []

  // 2. 深度优先搜索: root -> 树; track -> 路径; treeSum -> 当前路径和
  const backtrack = (root, track, treeSum) => {
    // 2.1 终止条件
    if (!root) {
      return
    }

    // 2.2 路径添加一个元素
    track.push(root.val)

    // 2.3 计算当前路径总和
    treeSum += root.val

    // 2.4 如果没有左子树和右子树(叶子节点)
    if (!root.left && !root.right) {
      // 2.5 如果结果等于目标结果
      if (treeSum === targetSum) {
        result.push(track.slice())
      }
    } else {
      // 2.6 进一步递归左子树和右子树
      backtrack(root.left, track, treeSum)
      backtrack(root.right, track, treeSum)
    }

    // 2.7 回溯
    track.pop()
  }
  backtrack(root, [], 0)

  // 3. 返回结果
  return result
}
```
