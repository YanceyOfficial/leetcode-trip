---
id: 21-merge-two-lists
title: 合并两个有序链表
sidebar_label: 21. 合并两个有序链表
keywords:
  - 链表
---

:::success Tips
题目类型: 链表, 合并链表

相关题目:

- [23. 合并k个升序链表](/leetcode/hard/23-merge-k-lists)

:::

## 题目

给你两个有序链表, 按顺序合并它们.

:::info 示例

输入: l1 = 1->2->5, l2 = 1->3->4

输出: 1->1->2->3->4->5
:::

## 题解

```ts
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  // 这是是为了防止 l1, l2 长度不一致, 让长的那个链表的多出来那块补到最后面
  if (l1 === null) return l2
  if (l2 === null) return l1

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
}
```
