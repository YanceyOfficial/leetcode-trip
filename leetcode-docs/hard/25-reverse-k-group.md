---
id: 25-reverse-k-group
title: k-个一组翻转链表
sidebar_label: 25. k-个一组翻转链表
keywords:
  - LinkedList
---

:::success Tips
题目类型: LinkedList

相关题目: [92. 反转链表-ii](/leetcode/medium/92-reverse-between), [206. 反转链表](/leetcode/easy/206-reverse-list)
:::

## 题目

给你一个链表, 每 k 个节点一组进行翻转, 请你返回翻转后的链表.

k 是一个正整数, 它的值小于或等于链表的长度.

如果节点总数不是 k 的整数倍, 那么请将最后剩余的节点保持原有顺序.

:::success 进阶
你可以设计一个只使用常数额外空间的算法来解决此问题吗?

你不能只是单纯的改变节点内部的值, 而是需要实际进行节点交换.
:::

:::info 示例

输入: head = [1,2,3,4,5], k = 2

输出: [2,1,4,3,5]

解释: 每 2 个节点反转一次, 也就是 1, 2 做一次反转; 3, 4 做一次反转; 因为只剩一个 5 了, 就无须反转.
:::

## 题解

这道题相当于**先让每 k 个节点进行翻转, 然后再次拼接.**, 首先写一个 reverse 方法, 这个方法跟 [206. 反转链表](/leetcode/easy/206-reverse-list)基本一致, 只不过 206 题是翻转整个链表, 而本题需要在某个区间内翻转.

```ts
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (head === null) return null

  let a = head,
    b = head

  for (let i = 0; i < k; i++) {
    // 不足 k 个, 不需要反转, base case
    if (b === null) return head
    b = b.next
  }
  // 反转前 k 个元素
  const newHead = reverse(a, b)

  // 递归反转后续链表并连接起来
  a.next = reverseKGroup(b, k)
  return newHead
}

// 基本就是 206 题的翻版
var reverse = function (a, b) {
  let prev = null,
    curr = a

  // 在 a, b 区间翻转
  while (curr !== b) {
    const next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }

  return prev
}
```
