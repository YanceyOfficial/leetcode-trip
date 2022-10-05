---
id: 24-swap-pairs
title: 两两交换链表中的节点
sidebar_label: 24. 两两交换链表中的节点
---

## 题目

给定一个链表, 两两交换其中相邻的节点, 并返回交换后的链表. 你不能只是单纯的改变节点内部的值, 而是需要实际的进行节点交换.

:::info 示例

```ts
输入: [1, 2, 3, 4, 5]

输出: [2, 1, 4, 3, 5]
```

```ts
输入: [1]

输出: [1]
```

```ts
输入: []

输出: []
```

:::

## 题解

### 迭代法

1. 创建一个哑链表, 将它的 next 指向 head
2. temp 表示当前到达的节点, 初始时 temp = dummy, 每次需要交换 temp 后面的两个节点
3. 如果下一个节点为 null, 意味着到头了; 抑或如果下下个节点为 null, 意味链表长度为奇数, 没法再做交换, 结束循环
4. 交换之前的节点关系是 temp -> node1 -> node2, 交换之后的节点关系要变成 temp -> node2 -> node1, 因此代码如下:

```ts
// 把 end 放到 temp.next 下
temp.next = end
// 把 end 的下一个放到 start 的下一个
start.next = end.next
// end 的下一个指向 start
end.next = start

// start 赋值给 temp, 实际上就是将 temp 往后走了两步
temp = start
```

```ts
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let dummy = new ListNode(0)
  dummy.next = head
  let temp = dummy
  while (temp.next !== null && temp.next.next !== null) {
    let start = temp.next
    let end = temp.next.next
    temp.next = end
    start.next = end.next
    end.next = start

    // 向后游走
    temp = start
  }
  return dummy.next
}
```

### 递归法

返回值: 交换完成的子链表
调用单元: 设需要交换的两个点为 head 和 next, head 连接后面交换完成的子链表, next 连接 head, 完成交换
终止条件: head 为空指针或者 next 为空指针, 也就是当前无节点或者只有一个节点, 无法进行交换

```ts
var swapPairs = function (head) {
  if (head === null || head.next === null) {
    return head
  }
  const newHead = head.next
  head.next = swapPairs(newHead.next)
  newHead.next = head
  return newHead
}
```
