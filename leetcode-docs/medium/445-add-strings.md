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

这道题是 [两数相加(链表版)](/leetcode/easy/2-two-sum) 的进阶版, 难点在于高位在前, 低位在后, 故无法直接使用加法规则. 为了使低位先出来, 自然会想到使用栈.

1. 遍历两个链表, 将数据逐一 push 到栈中
2. 对两个栈进行 pop, 得到的数字即为相同位置的数字
3. 剩下的就是大数相加和栈的基本操作了

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
