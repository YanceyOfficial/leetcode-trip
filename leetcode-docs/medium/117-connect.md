---
id: 117-connect
title: 填充每个节点的下一个右侧节点指针-ii
sidebar_label: 117. 填充每个节点的下一个右侧节点指针-ii
keywords:
  - Tree
---

:::success Tips
题目类型: Tree
:::

## 题目

给定一个**完美二叉树**, 其所有叶子节点都在同一层, 每个父节点都有两个子节点. 二叉树定义如下:

```c
struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
```

填充它的每个 next 指针, 让这个指针指向其下一个右侧节点. 如果找不到下一个右侧节点, 则将 next 指针设置为 NULL 初始状态下, 所有 next 指针都被设置为 NULL.

**进阶:**

你只能使用**常量级额外空间**.

使用递归解题也符合要求, 本题中递归程序占用的栈空间不算做额外的空间复杂度.

:::info 示例

输入:

```ts
     1
   /   \
  2     3
 / \    / \
4   5  6   7
```

输出:

```ts
     1 -> null
   /   \
  2 ->  3 -> null
 / \    / \
4 ->5->6-> 7 -> null
```

:::

## 题解

这题跟 [116. 填充每个节点的下一个右侧节点指针](/leetcode/medium/116-connect) 重了吧...

```ts
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (root !== null) {
    const queue = [root]

    while (queue.length !== 0) {
      const len = queue.length

      // 遍历这一层的所有节点
      for (let i = 0; i < len; i++) {
        const curr = queue.shift()

        // 连接
        if (i < len - 1) {
          curr.next = queue[0]
        }

        // 拓展下一层节点
        if (curr.left !== null) {
          queue.push(curr.left)
        }
        if (curr.right !== null) {
          queue.push(curr.right)
        }
      }
    }
  }

  return root
}
```
