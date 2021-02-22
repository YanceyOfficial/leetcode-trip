---
id: 445-add-strings
title: 两数相加 II(链表版)
sidebar_label: 445. 两数相加 II(链表版)
---

## 题目

两个**非空**链表来代表两个非负整数. 数字最高位位于链表开始位置. 它们的每个节点只存储一位数字, 将这两数相加会返回一个新的链表. 这两个数字都不会以零开头.

:::info 示例

输入: `(7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)`

输出: `7 -> 8 -> 0 -> 7`
:::

## 题解

```js
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const stack1 = []
  const stack2 = []

  while (l1 !== null) {
    stack1.push(l1.val)
    l1 = l1.next
  }

  while (l2 !== null) {
    stack2.push(l2.val)
    l2 = l2.next
  }

  const head = new ListNode(0)
  let carry = 0

  while (stack1.length !== 0 || stack2.length !== 0 || carry !== 0) {
    let sum = 0
    const val1 = stack1.length === 0 ? 0 : stack1.pop()
    const val2 = stack2.length === 0 ? 0 : stack2.pop()
    sum = val1 + val2 + carry

    carry = (sum / 10) | 0

    const tmp = new ListNode(sum % 10)
    tmp.next = head.next
    head.next = tmp
  }

  return head.next
}
```
