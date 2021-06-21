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

- [23. 合并 k 个升序链表](/leetcode/hard/23-merge-k-lists)

:::

## 题目

给你两个有序链表, 按顺序合并它们.

:::info 示例

输入: l1 = 1->2->5, l2 = 1->3->4

输出: 1->1->2->3->4->5
:::

## 题解

### 递归版

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

### 迭代版

迭代版的比较直观, 先建立一个伪节点 head, 然后进行迭代, 在迭代的过程中:

- 如果 `l1.val < l2.val`, 说明 l1 应该放在 head 的 next, 然后让 l1, head 往下走
- 如果 `l1.val >= l2.val`, 说明 l2 应该放在 head 的 next, 然后让 l2, head 往下走

只要 l1 或者 l2 有一个到底了, 跳出循环. 此时某个链表可能还没走到头, 因为你没法保证两个链表长度一样. 不过没关系, 题目标注了两个链表是有序的, 所以直接把最后多出来的这一块链到 head 最后即可.

```ts
var mergeTwoLists = function (l1, l2) {
  let head = new ListNode(-1)
  const dummy = head

  while (l1 && l2) {
    if (l1.val < l2.val) {
      head.next = l1
      l1 = l1.next
      head = head.next
    } else {
      head.next = l2
      l2 = l2.next
      head = head.next
    }
  }

  if (l1 !== null) head.next = l1
  if (l2 !== null) head.next = l2

  return dummy.next
}
```
