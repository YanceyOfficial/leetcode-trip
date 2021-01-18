/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存机制
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity
  this.caches = new Map()
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const val = this.caches.get(key)

  // 如果不存在, 返回 -1
  if (val === undefined) return -1

  // 如果存在, 因为用过一次了, 就把它删除掉, 重新 set 一次
  this.caches.delete(key)
  this.caches.set(key, val)

  // 如果存在, 返回这个 val
  return val
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  // 如果存在, 先把它删除
  if (this.caches.has(key)) {
    this.caches.delete(key)
  }

  // 新增 k-v
  this.caches.set(key, value)

  // 如果超过了容量, 就把 Map 最老的那个删除掉
  if (this.caches.size > this.capacity) {
    this.caches.delete(this.caches.keys().next().value)
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
