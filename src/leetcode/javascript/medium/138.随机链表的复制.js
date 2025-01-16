/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 随机链表的复制
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val === undefined ? 0 : val;
 *    this.next = next === undefined ? null : next;
 *    this.random = random === undefined ? null : random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) return null

  const map = new Map()
  let current = head

  // 复制节点并存储映射关系
  while (current) {
    map.set(current, new Node(current.val))
    current = current.next
  }

  current = head

  // 设置 next 指针和 random 指针
  while (current) {
    const newNode = map.get(current)
    newNode.next = map.get(current.next) || null
    newNode.random = map.get(current.random) || null
    current = current.next
  }

  return map.get(head)
}
// @lc code=end
