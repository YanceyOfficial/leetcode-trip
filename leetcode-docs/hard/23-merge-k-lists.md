---
id: 23-merge-k-lists
title: 合并k个升序链表
sidebar_label: 23. 合并k个升序链表
---

## 题目

这里是题目这里是题目这里是题目这里是题目这里是题目

:::info 示例

输入:

输出:
:::

## 题解

这里是题解这里是题解这里是题解这里是题解这里是题解

```ts
/* eslint-disable no-restricted-syntax */
import { PriorityQueue } from './data-structures/Queue/PriorityQueue'

function ListNode(val) {
  this.val = val
  this.next = null
}

export function mergeKLists(lists) {
  const listNodes = [] as any
  for (const list of lists) {
    let head = list
    while (head) {
      listNodes.push(head)
      head = head.next
    }
  }

  const pq = new PriorityQueue()

  for (const listNode of listNodes) {
    pq.offer([listNode.val, listNode])
  }

  const root = new ListNode(-1)
  let prevHead = root
  while (pq.size()) {
    prevHead.next = pq.poll()
    prevHead = prevHead.next
  }

  prevHead.next = null

  return root.next
}
```
