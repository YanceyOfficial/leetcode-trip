---
id: dfs-bfs
title: 深度/广度优先遍历
sidebar_label: 深度/广度优先遍历
---

## 综述

深度优先遍历, 又是回溯算法的核心框架, 并且前序, 中序, 后序都是用的深度优先遍历. 广度优先遍历的本质就是让你从一个起点, 走到终点, 问最短路径, 它使用队列.

## 深度优先遍历

![深度优先遍历](../static/img/dfs-bfs-dfs.gif)

```ts
export interface ITreeNode<T> {
  val: T
  left: ITreeNode<T> | null
  right: ITreeNode<T> | null
}

// 递归法的深度优先遍历, 实现先序遍历
const DFSByRecursion = <T>(root: ITreeNode<T> | null, callback: Function) => {
  if (root === null) return

  // 遍历节点
  callback(root)

  // 遍历左节点
  DFSByRecursion(root.left, callback)

  // 遍历右节点
  DFSByRecursion(root.right, callback)
}

// 迭代法的深度优先遍历, 使用栈, 实现先序遍历
const DFSByIteration = <T>(root: ITreeNode<T> | null, callback: Function) => {
  if (root === null) return

  const stack = [root]

  while (stack.length !== 0) {
    const curr = stack.pop() as ITreeNode<T>

    callback(curr)

    if (curr.right !== null) {
      stack.push(curr.right)
    }

    if (curr.left !== null) {
      stack.push(curr.left)
    }
  }
}
```

## 广度优先遍历

![广度优先遍历](../static/img/dfs-bfs-bfs.gif)

```ts
const BFS = <T>(root: ITreeNode<T>, callback: Function) => {
  if (!root) return null

  const queue = [root]

  while (queue.length !== 0) {
    const currLevelLength = queue.length

    for (let i = 0; i < currLevelLength; i++) {
      const node = queue.shift() as ITreeNode<T>

      callback(node)

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }
}
```
