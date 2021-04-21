/*
 * @lc app=leetcode.cn id=382 lang=javascript
 *
 * [382] 链表随机节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
var Solution = function (head) {
  this.head = head
}

/**
 * Returns a random node's value.
 * @return {number}
 */
Solution.prototype.getRandom = function () {
  let num = 0
  let res = null
  let head = this.head
  while (head !== null) {
    num++
    if (!Math.floor(Math.random() * num)) {
      res = head.val
    }
    head = head.next
  }
  return res
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
// @lc code=end
