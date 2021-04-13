---
id: 141-has-cycle
title: 环形链表
sidebar_label: 141. 环形链表
---

## 题目

判断一个链表是否有环.

## 题解

### 使用快慢指针

慢指针一次循环往前走一步, 快指针一次循环往前走两步, 就跟跑 400 米一样, 一个人一分钟能跑 100 米,另一个人一分钟能跑 200 米,前一个人跑四分钟回到了原点, 同样后一个人跑四分钟也回到了原点, 只不过一个人跑了 400 米, 一个人跑了 800 米.

```ts
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let slow = head
  let fast = head

  // while 循环要保证 fast 和 fast.next 不为 null
  while (fast !== null && fast.next !== null) {
    // 快指针一次走两个
    fast = fast.next.next
    // 满指针一次走两一个
    slow = slow.next

    // 如果相遇了, 证明是环形链表
    if (fast === slow) return true
  }

  return false
}
```

### 使用 hash map

环形链表循环的节点是一个「链表结构」,因此在遍历过程中如果再次找到该节点的引用就可证明它是一个环形链表.

```ts
var hasCycle = function (head) {
  let current = head
  const set = new Set()

  while (current) {
    if (set.has(current)) {
      return true
    }
    set.add(current)
    current = current.next
  }

  return false
}
```

## 双指针技巧汇总

[双指针技巧汇总](https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247484505&idx=1&sn=0e9517f7c4021df0e6146c6b2b0c4aba&chksm=9bd7fa51aca07347009c591c403b3228f41617806429e738165bd58d60220bf8f15f92ff8a2e&scene=21#wechat_redirect)
