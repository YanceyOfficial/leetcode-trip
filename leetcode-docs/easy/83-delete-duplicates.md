---
id: 83-delete-duplicates
title: 删除排序链表中的重复元素
sidebar_label: 83. 删除排序链表中的重复元素
keywords:
  - 链表
  - 快慢指针
---

:::success Tips
题目类型: 链表, 快慢指针

相关题目:

- [26. 删除排序数组中的重复项](/leetcode/easy/26-remove-duplicates)
- [27. 移除元素](/leetcode/easy/27-remove-element)
- [61. 旋转链表](/leetcode/medium/61-rotate-right)
- [141. 环形链表](/leetcode/easy/141-has-cycle)
- [142. 环形链表 II](/leetcode/medium/142-detect-cycle)
- [234. 回文链表](/leetcode/easy/234-is-palindrome)
:::

## 题目

存在一个按**升序排列**的链表, 给你这个链表的头节点 head, 请你删除所有重复的元素, 使每个元素只出现一次. 返回同样按升序排列的结果链表.

:::info 示例

输入: head = [1, 1, 2, 3, 3]

输出: [1, 2, 3]
:::

## 题解

### 方法一

因为链表是升序的, 因此如果有重复的值, 这些重复的值也一定也是在一起的. 因此一趟循环, 只要**当前节点值**等于**下个节点的值**, 直接删除**下个节点**即可.

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
  let curr = head
  while (curr !== null && curr.next !== null) {
    if (curr.next.val === curr.val) {
      curr.next = curr.next.next
    } else {
      curr = curr.next
    }
  }
  return head
}
```

### 双指针

因为链表有天然的方法 `curr.next = curr.next.next` 来删除下个元素, 所以用上面的解法就 ok, 不过更通用的解法是使用快慢指针.

:::success TIPS
这个解法可以跟 [26. 删除排序数组中的重复项](/leetcode/easy/26-remove-duplicates) 对比着看, 一个模子, 只不过一个是数组, 一个是链表.
:::

```ts
var deleteDuplicates = function (head) {
  if (!head) return head

  let slow = head,
    fast = head

  while (fast) {
    if (fast.val !== slow.val) {
      slow.next = fast
      slow = slow.next
    }

    fast = fast.next
  }

  // 断开与后面重复元素的连接
  slow.next = null

  return head
}
```
