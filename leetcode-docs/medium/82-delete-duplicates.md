---
id: 82-delete-duplicates
title: 删除排序链表中的重复元素-ii
sidebar_label: 82. 删除排序链表中的重复元素-ii
---

## 题目

给定一个**排序**链表, 移除链表中所有重复值的节点,

:::info 示例

输入: 1 -> 1 -> 1 -> 2 -> 3 -> 4 -> 5 -> 5

输出: 3 -> 4
:::

## 题解

由于第一个元素有可能也是重复的, 所以得整个 dummy 节点. 因为链表是排好序的, 所以如果出现重复, 它们也是连续的. 因此如果 `curr.next.val === curr.next.next.val`, 说明出现重复, 那么在内部做一波遍历,剔除重复的元素即可.

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
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head) return head
  const dummy = new ListNode(-1)
  dummy.next = head
  let curr = dummy

  while (curr.next && curr.next.next) {
    if (curr.next.val === curr.next.next.val) {
      const currVal = curr.next.val
      // 剔除重复元素
      while (curr.next && curr.next.val === currVal) {
        curr.next = curr.next.next
      }
    } else {
      curr = curr.next
    }
  }

  return dummy.next
}
```

## 复杂度分析

时间复杂度: O(n), 虽然有两个循环, 但本质是走了一趟链表, 因此时间复杂度是 O(n).

空间复杂度: O(1)
