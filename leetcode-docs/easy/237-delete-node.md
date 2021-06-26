---
id: 237-delete-node
title: 删除链表中的节点
sidebar_label: 237. 删除链表中的节点
keywords:
  - LinkedList
---

:::success Tips
题目类型: LinkedList
:::

## 题目

请编写一个函数, 使其可以删除某个链表中给定的(非末尾)节点. 传入函数的唯一参数为**要被删除的节点**.

:::info 示例

输入: head = [4,5,1,9], node = 5

输出: [4,1,9]

解释: 给定你链表中值为 5 的第二个节点, 那么在调用了你的函数之后, 该链表应变为 4 -> 1 -> 9.
:::

## 题解

就一脑筋急转弯... 一般来讲, 我们删除某个节点 node, 是通过让它的前一个节点 prev.next = prev.next.next. 但本题目没有给 prev 节点, 因此我们可以通过将该节点 node 的下一个节点的 val 设为 node.val, 这样就保证了 node 和 node.next 的 val 相等了, 然后删除 node.next 这个节点就行. 可之谓实为删除 node, 却让 node.next 背了锅也.

```ts
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  node.val = node.next.val
  node.next = node.next.next
}
```
