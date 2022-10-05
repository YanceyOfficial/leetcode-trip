---
id: 203-remove-elements
title: 移除链表元素
sidebar_label: 203. 移除链表元素
keywords:
  - LinkedList
---

:::success Tips
题目类型: LinkedList
:::

## 题目

给你一个链表的头节点 head 和一个整数 val, 请你删除链表中所有满足 Node.val === val 的节点, 并返回**新的头节点**.

:::info 示例

输入: head = 5 -> 6 -> 5 -> 5, val = 5

输出: 6
:::

## 题解

考虑到 head 的第一个节点有可能会被删除, 所以需要前置一个哨兵节点. 然后遍历 curr, 如果 `curr.val === val`, 那就删除掉 curr 这个节点, 并始终让 curr 走在 prev 的前一步; 如果不等于 val, 那就让 prev 指向 curr, curr 往前走一步.

```ts
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let sentinel = new ListNode(null),
    prev = sentinel,
    curr = head
  sentinel.next = head

  while (curr) {
    if (curr.val === val) {
      prev.next = curr.next
      curr = prev.next
    } else {
      prev = curr
      curr = curr.next
    }
  }

  return sentinel.next
}
```
