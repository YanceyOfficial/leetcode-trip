---
id: 19-remove-nth-from-end
title: 删除链表的倒数第N个节点
sidebar_label: 19. 删除链表的倒数第N个节点
---

## 题目

给定一个链表, 删除链表的倒数第 n 个节点, 并返回修改后的链表的头节点.

:::info 示例

输入: 给定一个链表 1 -> 2 -> 3 -> 4 -> 5, n = 2

输出: 1 -> 2 -> 3 -> 5
:::

## 题解

### 朴素解法

最朴素的解法是先遍历链表, 获取链表的长度, 从而根据**倒数第 n 个节点**算出该节点的 index; 然后使用删除链表节点的方法将该节点删除. 但是该方法会导致两趟循环, 不优雅.

```ts
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let curr = head
  let total = 0
  while (curr !== null) {
    total++
    curr = curr.next
  }

  let deletedNodeIndex = total - n
  let prev = head

  for (let i = 0; i < deletedNodeIndex - 1; i++) {
    prev = prev.next
  }

  if (deletedNodeIndex === 0) {
    return head.next
  }

  prev.next = prev.next.next
  return head
}
```

### 双指针解法

1. 先让快指针走到 n 的位置
2. 如果此时快指针走到头了, 说明倒数第 n 个节点就是第一个节点, 直接用 `head.next` 删除头节点
3. 否则在 fast 和 fast.next 都存在的情况下, 让慢指针和快指针同步向前
4. 当快指针到了最后一个节点, 慢指针也就到了倒数第 n 个节点的前一个节点
5. 使用 `slow.next = slow.next.next` 即可删除该节点
6. 返回 head 即可

:::note
由于第二次遍历是第一次的延续(第一次是从链头到 n, 第二次是从 n 到链尾), 因此其实就是一趟遍历.
:::

```ts
var removeNthFromEnd = function (head, n) {
  let fast = head
  let slow = head

  // 先让快指针走到 n 的位置
  while (n-- > 0) {
    fast = fast.next
  }

  if (fast === null) {
    // 如果此时快指针走到头了
    // 说明倒数第 n 个节点就是第一个节点
    return head.next
  }

  // 让慢指针和快指针同步向前
  while (fast !== null && fast.next !== null) {
    fast = fast.next
    slow = slow.next
  }

  // slow.next 就是倒数第 n 个节点, 删除它
  slow.next = slow.next.next
  return head
}
```
