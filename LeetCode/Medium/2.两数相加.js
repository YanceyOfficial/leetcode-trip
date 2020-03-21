/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val
  this.next = null
}

var push = function(head, element) {
  const node = new ListNode(element)
  let current = null

  if (head === null) {
    head = node
  } else {
    current = head
    while (current.next) {
      current = current.next
    }
    current.next = node
  }

  return head
}

var addTwoNumbers = function(l1, l2) {
  if (l1 === null && l2 === null) return null

  const arr1 = [],
    arr2 = []

  while (l1 || l2) {
    if (l1 === null) {
      arr1.push(0)
    } else {
      arr1.push(l1.val)
      l1 = l1.next
    }

    if (l2 === null) {
      arr2.push(0)
    } else {
      arr2.push(l2.val)
      l2 = l2.next
    }
  }

  const arr = []

  for (let i = 0; i < arr1.length; i++) {
    arr.push(parseInt(arr1[i], 10) + parseInt(arr2[i], 10))
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) {
      arr[i] -= 10
      arr[i + 1] = i + 1 >= arr.length ? 1 : arr[i + 1] + 1
    }
  }

  let linkedlist = null

  for (let i = 0; i < arr.length; i++) {
    linkedlist = push(linkedlist, arr[i])
  }

  return linkedlist
}
// @lc code=end

const l1 = new ListNode(2)
l1.next = new ListNode(4)
l1.next.next = new ListNode(3)

const l2 = new ListNode(5)
l2.next = new ListNode(6)
l2.next.next = new ListNode(4)
// l2.next.next.next = new ListNode(1)

console.log(addTwoNumbers(l1, l2))
