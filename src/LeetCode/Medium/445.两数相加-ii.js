/*
 * @lc app=leetcode.cn id=445 lang=javascript
 *
 * [445] 两数相加 II
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
var addStrings = function (num1, num2) {
  const len = Math.max(num1.length, num2.length)
  num1 = num1.padStart(len, 0)
  num2 = num2.padStart(len, 0)

  let caddy = 0
  let res = ''

  for (let i = len - 1; i >= 0; i--) {
    const sum = +num1[i] + +num2[i] + caddy
    caddy = (sum / 10) | 0
    res = (sum % 10) + res
  }

  return caddy === 0 ? res : `1${res}`
}

var addTwoNumbers = function (l1, l2) {
  let l1Num = ''
  while (l1) {
    l1Num = l1Num + l1.val.toString()
    l1 = l1.next
  }

  let l2Num = ''
  while (l2) {
    l2Num = l2Num + l2.val.toString()
    l2 = l2.next
  }

  const sumArr = addStrings(l1Num, l2Num).split('')

  let node
  let head = new ListNode(sumArr[0])
  let pNode = head // pNode 变量用来保存前一个节点

  for (let i = 1; i < sumArr.length; i++) {
    node = new ListNode(sumArr[i])
    pNode.next = node // 将前一个节点的 next 指向当前节点
    pNode = node // 将node 赋值给 pNode
  }

  return head
}
// @lc code=end
