---
id: 114-flatten
title: 二叉树展开为链表
sidebar_label: 114. 二叉树展开为链表
keywords:
  - Tree
---

:::success Tips
题目类型: Tree
:::

## 题目

给你二叉树的根结点 root, 请你将它展开为一个单链表: 展开后的单链表应该同样使用 TreeNode(即不能创建额外的树), 其中 right 子指针指向链表中下一个结点, 而左子指针始终为 null. 展开后的单链表应该与二叉树**前序遍历**顺序相同.

:::info 示例

输入:

```ts
     1
   /   \
  2     5
 / \     \
3   4     6
```

输出:

```ts
    1
     \
      2
       \
        3
         \
          4
           \
            5
             \
              6
```

:::

## 题解

### 方法一: 朴素递归法

下面是最朴素的解决方案, 首先用先序遍历将树的每个节点 push 到一个数组里; 然后循环该数组, 将 `list[i - 1]` 设为前一个节点, 将该节点的 left 设为 null, right 一个一个的设为 `list[i]`.

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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  const list = []
  preorderTraversal(root, list)

  for (let i = 1; i < list.length; i++) {
    const prev = list[i - 1],
      curr = list[i]

    prev.left = null
    prev.right = curr
  }
}

function preorderTraversal(root, list) {
  if (root !== null) {
    list.push(root)
    preorderTraversal(root.left, list)
    preorderTraversal(root.right, list)
  }
}
```

### 方法二: 朴素非递归法

因为前序遍历也可以用循环的方法, 即借助栈, 这里用循环法实现一遍.

```ts
var flatten = function (root) {
  if (root !== null) {
    const stack = [root]
    const list = []

    while (stack.length !== 0) {
      const curr = stack.pop()

      // cb
      list.push(curr)

      if (curr.right !== null) {
        stack.push(curr.right)
      }
      if (curr.left !== null) {
        stack.push(curr.left)
      }
    }

    for (let i = 1; i < list.length; i++) {
      const prev = list[i - 1],
        curr = list[i]

      prev.left = null
      prev.right = curr
    }
  }
}
```

以上两种解法的时间复杂度和空间复杂度均为 O(n)

### 方法三

维护上一个访问的节点 prev, 每次访问一个节点时, 令当前访问的节点为 curr, 将 prev 的左子节点设为 null 以及将 prev 的右子节点设为 curr, 然后将 curr 赋值给 prev, 进入下一个节点的访问, 直到遍历结束.

```ts
var flatten = function (root) {
  if (root !== null) return

  const stack = [root]
  let prev = null

  while (stack.length !== 0) {
    const curr = stack.pop()
    if (prev !== null) {
      prev.left = null
      prev.right = curr
    }

    if (curr.right !== null) stack.push(curr.right)
    if (curr.left !== null) stack.push(curr.left)

    prev = curr
  }
}
```

时间复杂度和空间复杂度均为 O(n)

### 方法四

```ts
    1
   / \
  2   5
 / \   \
3   4   6

// 找到 1 的左子树的最右叶子节点 4
  2         5
 / \         \
3   4         6


// 将 1 的右子树拼接到 4 的右边
  2
 / \
3   4
     \
      5
       \
        6

// 将上面这一坨拼到 1 的右边, 并把 1 的左边置为 null
    1
     \
      2
     / \
    3   4
         \
          5
           \
            6

 // 继续遍历, 直到找到存在左节点的情况, 重复上述操作
```

```ts
var flatten = function (root) {
  while (root !== null) {
    if (root.left !== null) {
      let pre = root.left
      // 找到左子树的最右叶子节点
      while (pre.right !== null) {
        pre = pre.right
      }

      // 将原来的右子树接到左子树的最右边叶子节点
      pre.right = root.right

      // 将左子树插入到右子树的位置
      root.right = root.left

      // 将左子树置为 null
      root.left = null
    }

    root = root.right
  }
}
```

时间复杂度: O(n)

空间复杂度: O(1)
