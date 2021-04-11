---
id: 142-detect-cycle
title: 环形链表 II
sidebar_label: 142. 环形链表 II
---

## 题目

给一个链表, 返回链表**入环的第一个节点**, 如果链表无环, 则返回 null;

:::info 示例

```js
输入: 3 →  2 →  0 →  -4
          ↑          ↓
          ← ← ← ← ← ←↓

输出: 2(ListNode)
```

```js
输入: 1

输出: null
```

:::

## 题解

### hash map 法

本题跟 [141. 环形链表](/leetcode/easy/141-has-cycle) 一样, 都可以使用 hash 表来解, 遍历一圈, 只要找到相同节点的引用, 就证明它为环形链表. 不过由于创建了一个 hash 表, 因此时间复杂度为 O(n).

```ts
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let curr = head
  const set = new Set()

  while (curr !== null) {
    if (set.has(curr)) return curr
    set.add(curr)
    curr = curr.next
  }

  return null
}
```

### 双指针法

第二种解法有点儿脑筋急转弯的意思:

1. 先用快慢指针, 直到两者相遇, 当然如果 fast 或者 fast.next 等于了 null, 就证明无环;

2. 相遇后让任意一个指针指向 head, 并以同速往前走, 直到相遇, 相遇的节点就是入环节点.

```ts
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let slow = head
  let fast = head

  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next

    // 快慢指针相遇跳出循环
    if (slow === fast) break
  }

  // 不是环的返回 null
  if (fast === null || fast.next === null) return null

  // 让任意一个指针指向 head
  slow = head

  // 同速运动
  while (slow !== fast) {
    slow = slow.next
    fast = fast.next
  }

  return slow
}
```
