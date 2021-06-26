---
id: 2-add-two-numbers
title: 两数相加(链表版)
sidebar_label: 2. 两数相加(链表版)
keywords:
  - LinkedList
---

:::success Tips
题目类型: LinkedList
:::

## 题目

两个**非空**的链表, 表示两个非负的整数. 它们每位数字都是按照**逆序**的方式存储的, 并且每个节点只能存储**一位**数字. 将两个数相加, 并以相同形式返回一个表示和的链表, 两个链表都不会以 0 开头.

:::info 示例

输入: l1 = `2 -> 4 -> 3`, l2 = `5 -> 6 -> 8`

输出: `7 -> 0 -> 2 -> 1`

解释: 342 + 865 = 1207.
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
var addTwoNumbers = function (l1, l2) {
  const pre = new ListNode(null)
  let curr = pre
  let carry = 0

  while (l1 || l2) {
    let x = l1 === null ? 0 : l1.val
    let y = l2 === null ? 0 : l2.val

    let sum = x + y + carry
    carry = (sum / 10) | 0
    sum = sum % 10
    curr.next = new ListNode(sum)
    curr = curr.next

    if (l1 !== null) l1 = l1.next
    if (l2 !== null) l2 = l2.next
  }

  if (carry === 1) curr.next = new ListNode(1)
  return pre.next
}
```
