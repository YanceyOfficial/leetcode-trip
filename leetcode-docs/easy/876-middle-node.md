---
id: 876-middle-node
title: 链表的中间结点
sidebar_label: 876. 链表的中间结点
---

## 题目

给定一个头结点为 head 的非空单链表, 返回链表的中间结点; 如果有两个中间结点，则返回第二个中间结点.

:::info 示例

```ts
输入: 1 -> 2 -> 3 -> 4

输出: 3 (偶数链表返回第二个)
```

```ts
输入: 1 -> 2 -> 3

输出: 2
```

:::

## 题解

使用快慢指针. 对于奇数链表, fast 会走到链表尾部, 此时 fast.next 为 null, slow 即为中间节点; 对于偶数链表, fast 会走到链表尾部的前一个, 此时 slow 为第一个中间节点, 然后 fast 再走一次, 此时 fast 为 null, slow 即为第二个中间节点.

```ts
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let slow = head
  let fast = head

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next
    slow = slow.next
  }

  return slow
}
```
