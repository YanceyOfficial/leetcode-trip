---
id: 160-get-intersection-node
title: 相交链表
sidebar_label: 160. 相交链表
keywords:
  - LinkedList
  - HashMap
---

:::success Tips
题目类型: LinkedList, HashMap
:::

## 题目

给你两个单链表的头节点 headA 和 headB, 请你找出并返回两个单链表相交的起始节点. 如果两个链表没有交点, 返回 null. 题目数据**保证**整个链式结构中不存在环. 注意, 函数返回结果后, 链表**必须保持其原始结构**.

:::info 示例

输入:

```ts
     a1 → a2 ↘
              c1 → c2 → c3
b1 → b2 → b3 ↗
```

输出: c1
:::

## 题解

### 方案一

比较玄学, 我们直接看 while 循环的部分, 让上面这个例子动起来:

- p 指向 a1; q 指向 b1, 它俩不相等, 往前走
- p 指向 a2; q 指向 b2, 它俩不相等, 往前走
- p 指向 c1; q 指向 b3, 它俩不相等, 往前走
- p 指向 c2; q 指向 c1, 它俩不相等, 往前走
- p 指向 c3; q 指向 c2, 它俩不相等, 往前走
- p 指向 null; q 指向 c3, 它俩不相等, 往前走
- p 指向 b1(注意变轨了); q 指向 null, 它俩不相等, 往前走
- p 指向 b2; q 指向 a1(注意变轨了), 它俩不相等, 往前走
- p 指向 b3; q 指向 a2, 它俩不相等, 往前走
- p 指向 c1; q 指向 c1, 它俩相等!

也就是说如果有相交节点, 那最终 while 循环会在这个相交节点相遇; 如果没有相交节点, p 和 q 都会变成 null.

```ts
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) return null

  let p = headA,
    q = headB

  while (p !== q) {
    p = p === null ? headB : p.next
    q = q === null ? headA : q.next
  }

  return p
}
```

### 方案二

想必大家都能想到这个方法, 用 HashMap 嘛. 先遍历第一个链表, 将节点依次存到 HashMap 中, 再遍历第二个链表, 如果能在 HashMap 中找到引用, 就说明找到了相交节点呗; 如果第二个链表遍历到头了, 还没在 HashMap 中找到引用, 说明就不相交.

```ts
var getIntersectionNode = function (headA, headB) {
  let p = headA
  let q = headB
  const set = new Set()

  while (p) {
    set.add(p)
    p = p.next
  }

  while (q) {
    if (set.has(q)) {
      return q
    }

    q = q.next
  }

  return null
}
```

时间复杂度: O(m + n)

空间复杂度: O(n)
