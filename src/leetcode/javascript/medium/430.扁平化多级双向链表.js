/*
 * @lc app=leetcode.cn id=430 lang=javascript
 *
 * [430] 扁平化多级双向链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
  let curr = head
  const stack = []

  while (curr) {
    if (curr.child) {
      if (curr.next) {
        stack.push(curr.next)
      }
      const child = curr.child
      curr.next = child
      child.prev = curr
      curr.child = null
    }

    if (!curr.next && stack.length > 0) {
      const tmp = stack.pop()
      curr.next = tmp
      tmp.prev = curr
    }

    curr = curr.next
  }

  return head
}
// @lc code=end
