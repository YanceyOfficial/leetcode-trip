---
id: 234-is-palindrome
title: 回文链表
sidebar_label: 234. 回文链表
---

## 题目

请判断一个链表是否为回文链表.

:::info 示例

输入: 1->2->2->1

输出: true
:::

## 题解

### 菜 🐔 解法

将链表的值整到一个数组里, 然后用左右双指针判断是否为回文.

```ts
var isPalindrome = function (head) {
  const arr = []

  while (head) {
    arr.push(head.val)
    head = head.next
  }

  let i = 0,
    j = arr.length - 1

  while (i <= j) {
    if (arr[i] !== arr[j]) return false
    i++
    j--
  }

  return true
}
```

### 使用递归

```ts
var isPalindrome = function (head) {
  let left = head

  var traverse = function (right) {
    if (right === null) return true
    let res = traverse(right.next)
    // 后序遍历代码, 基于此可以从后到前获取链表
    res = res && right.val === left.val
    left = left.next
    return res
  }

  return traverse(head)
}
```

### 快慢指针

快慢指针的的作用是**找到中点**, 具体看注释.

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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (head === null || head.next === null) return true

  let slow = head,
    fast = head

  // 通过快慢指针找中点
  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }

  // 如果 fast 指针没有指向 null, 说明链表长度为奇数, slow 还要再前进一步
  if (fast !== null) {
    slow = slow.next
  }

  let left = head
  // 将右边的进行反转
  let right = reverse(slow)

  // 左右对比即可
  while (right !== null) {
    if (left.val !== right.val) return false
    left = left.next
    right = right.next
  }

  return true
}

// 仍然是 206 题那个反转链表的代码
var reverse = function (head) {
  let prev = null,
    curr = head

  while (curr) {
    const next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }

  return prev
}
```

时间复杂度: O(n)

空间复杂度: O(1)
