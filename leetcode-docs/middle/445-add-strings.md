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
  let l1Num = ''
  while (l1) {
    l1Num = l1Num + l1.val.toString()
    l1 = l1.next
  }

  let l2Num = ''
  while (l2) {
    l2Num = l2Num + l2.val.toString()
    l2 = l2.next
  }

  // 大数相加
  const sumArr = addStrings(l1Num, l2Num).split('')

  let node
  let head = new ListNode(sumArr[0])
  let pNode = head // pNode 变量用来保存前一个节点

  for (let i = 1; i < sumArr.length; i++) {
    node = new ListNode(sumArr[i])
    pNode.next = node // 将前一个节点的 next 指向当前节点
    pNode = node // 将node 赋值给 pNode
  }

  return head
}
```
