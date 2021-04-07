---
id: traversal
title: 树的遍历
sidebar_label: 树的遍历
---

:::info 注意
所有的遍历实现都在 [二分搜索树](/data-structure/tree/bst) 中, 其中三个深度优先遍历(前, 中, 后) 都分别实现了迭代和递归版.
:::

## 中序遍历

先序遍历是先访问左, 再访问根, 最后访问右. 它会保证从小到大的顺序遍历, 可用来排序.

![中序遍历](../../static/img/inOrderTraverse.jpg)

## 先序遍历

先序遍历是先访问根, 再访问左, 最后访问右. 可用来打印一个结构化的文档.

![先序遍历](../../static/img/preOrderTraverse.jpg)

## 后序遍历

后序遍历是先访问左, 再访问右, 最后访问根. 可以用来计算一个目录及其子目录中所有文件所占空间的大小.

![后序遍历](../../static/img/postOrderTraverse.jpg)

## 层序遍历

每层从左到右, 从上到下逐层遍历.
