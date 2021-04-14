---
id: 26-remove-duplicates
title: 删除排序数组中的重复项
sidebar_label: 26. 删除排序数组中的重复项
keywords:
  - 数组
  - 快慢指针
---

:::success Tips
题目类型: 数组, 快慢指针

相关题目:

- [27. 移除元素](/leetcode/easy/27-remove-element)
- [61. 旋转链表](/leetcode/medium/61-rotate-right)
- [83. 删除排序链表中的重复元素](/leetcode/easy/83-delete-duplicates)
- [141. 环形链表](/leetcode/easy/141-has-cycle)
- [142. 环形链表 II](/leetcode/medium/142-detect-cycle)
- [234. 回文链表](/leetcode/easy/234-is-palindrome)
:::

## 题目

给你一个**按升序的排列**数组 `nums`, 请你 **原地** 删除重复出现的元素, 使每个元素**只出现一次**, 返回删除后数组的新长度. 不要使用额外的数组空间, 你必须在 **原地** 修改输入数组 并在使用 O(1) 额外空间的条件下完成.

:::info 示例

输入: nums = [1, 1, 2]

输出: 2, 其中 nums 变成 [1, 2, 2]
:::

## 题解

看到有序数组, 先想到**双指针**, 这道题可以使用**快慢指针**: 让慢指针 `slow` 走在后面, 快指针 `fast` 走在前面探路, 找到一个不重复的元素就告诉 `slow` 并让 `slow` 前进一步. 这样当 `fast` 指针遍历完整个数组 `nums` 后, 前 `slow + 1` 个就是不重复元素.

- 第一步: `fast`, `slow` 指向的都是 `1`, 因此只需 `fast` 向前走一步;
- 第二步: 此时 `fast`, `slow` 指向的值不同, 让 `slow + 1`, 并把 `fast` 指向的值赋值给 `slow` 指向的值, 然后 `fast` 向前走一步;
- 第三步: `fast`, `slow` 指向的都是 `2`, 因此只需 `fast` 向前走一步;
- 第四步: `fast`, `slow` 指向的都是 `2`, 因此只需 `fast` 向前走一步;
- 第五步: 此时 `fast`, `slow` 指向的值不同, 让 `slow + 1`, 并把 `fast` 指向的值赋值给 `slow` 指向的值, 然后 `fast` 向前走一步;
- 第六步: `fast`, `slow` 指向的都是 `3`, 因此只需 `fast` 向前走一步, 此时 `fast > len`, 跳出循环, 返回 `show + 1` 即可.

```ts
  fast              fast              fast              fast              fast              fast
   ↓                 ↓                 ↓                 ↓                 ↓                 ↓
[1 2 2 2 3 3]   [1 2 2 2 3 3]   [1 2 2 2 3 3]   [1 2 2 2 3 3]   [1 2 3 2 3 3]   [1 2 3 2 3 3]
 ↑                 ↑               ↑               ↑                 ↑               ↑
slow              slow            slow            slow              slow            slow
```

```ts
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const len = nums.length
  if (len === 0) return 0
  // 双指针
  let slow = 0,
    fast = 0

  while (fast < len) {
    if (nums[fast] !== nums[slow]) {
      slow++
      nums[slow] = nums[fast]
    }
    fast++
  }

  return slow + 1
}
```
