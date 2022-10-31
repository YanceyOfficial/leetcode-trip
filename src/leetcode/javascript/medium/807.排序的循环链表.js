/*
 * @lc app=leetcode.cn id=807 lang=javascript
 *
 * [807] 排序的循环链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
var insert = function (head, insertVal) {
  const node = new Node(insertVal)
  if (!head) {
    node.next = node
    return node
  }

  if (head.next === head) {
    head.next = node
    node.next = head
    return head
  }

  let curr = head,
    next = head.next
  // 注意这里一定是 head !== next
  // 而不能是 curr !== next, 因为 next 永远都是 curr.next, 两者不会相遇
  while (head !== next) {
    if (curr.val <= insertVal && insertVal <= next.val) break
    if (curr.val > next.val) {
      if (curr.val < insertVal || next.val > insertVal) break
    }

    curr = curr.next
    next = next.next
  }

  curr.next = node
  node.next = next

  return head
}
// @lc code=end
